import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../services/prisma.service';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';
import {
  IBoundingBoxData,
  JsonObject,
} from '../../../../shared/interfaces/remoteIdentifier.interface';
import { ComposeDbClientService } from 'src/compose-db_client/compose-db_client.service';
import {
  extractFlightPath,
  fetchUniqueData,
} from '../../../../shared/utils/createFlightPath';

@Injectable()
export class RemoteIdentifierService {
  constructor(
    private prismaService: PrismaService,
    private composeDbClientService: ComposeDbClientService,
  ) {}

  async createRemoteIdentifierService(params: RemoteIdentifierDto) {
    const deviceData = await this.prismaService.device.create({
      data: {
        remoteData: params.remoteData,
      },
    });
    let ceramicData = null;
    try {
      ceramicData = await this.composeDbClientService.createRemoteData(
        params.remoteData,
      );
    } catch (error) {
      throw new Error('Failed to create signal on composeDB!!');
    }
    return { deviceData, ceramicData };
  }

  async getRemoteIdentifierByBoundingBox(
    params: IBoundingBoxData,
  ): Promise<JsonObject[]> {
    const { minLatitude, maxLatitude, minLongitude, maxLongitude } = params;
    try {
      const getAllData = await this.prismaService?.device?.findMany({
        orderBy: {
          createdAt: 'asc',
        },
      });

      const uniqueData = fetchUniqueData(getAllData as unknown as JsonObject[]);
      const filterData = uniqueData?.filter((data: JsonObject) => {
        if (
          data?.remoteData.location.latitude > minLatitude &&
          data?.remoteData.location.latitude < maxLatitude &&
          data?.remoteData.location.longitude > minLongitude &&
          data?.remoteData.location.longitude < maxLongitude
        ) {
          return data;
        }
      });
      return filterData;
    } catch (error) {
      console.error('Error fetching devices:', error);
    }
  }

  async getRemoteIdentifierByDroneMacAddress(params: string): Promise<object> {
    const singleDroneData = await this.prismaService.device.findMany({
      where: {
        AND: [
          {
            remoteData: {
              path: ['macAddress'],
              equals: params,
            },
          },
        ],
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
    const flightPath = extractFlightPath(
      singleDroneData as unknown as JsonObject[],
    );
    const returnedMacAddressData = singleDroneData[0] as unknown as JsonObject;
    const configuredData = {
      ...returnedMacAddressData,
      remoteData: {
        ...returnedMacAddressData?.remoteData,
        location: {
          ...returnedMacAddressData?.remoteData.location,
          flightPath,
        },
      },
    };
    return configuredData;
  }

  async getAggregateDroneData(params) {
    const deviceData = await this.prismaService.device.aggregate({
      _count: true,
      where: {
        OR: [
          {
            remoteData: {
              path: ['location', 'longitude'],
              equals: parseFloat(params.lon1),
            },
          },
          {
            remoteData: {
              path: ['location', 'longitude'],
              equals: parseFloat(params.lon2),
            },
          },
        ],
      },
    });
    return deviceData;
  }

  async getSqlDroneData(params: {
    lon1: string;
    lat1: string;
    lon2: string;
    lat2: string;
    page: number;
    limit: number;
  }) {
    const results = await this.prismaService.device.findMany({
      skip: params.page === 1 ? 0 : params.page * 10,
      take: 10,
      where: {
        OR: [
          {
            remoteData: {
              path: ['location', 'longitude'],
              equals: parseFloat(params.lon1),
            },
          },
          {
            remoteData: {
              path: ['location', 'longitude'],
              equals: parseFloat(params.lon2),
            },
          },
        ],
      },
    });
    console.log(results.length);

    return {
      _count: results.length,
    };
  }
}
