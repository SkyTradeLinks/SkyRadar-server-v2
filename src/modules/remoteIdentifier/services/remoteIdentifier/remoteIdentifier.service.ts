import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../services/prisma.service';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';
import {
  IBoundingBoxData,
  JsonObject,
} from '../../../../shared/interfaces/remoteIdentifier.interface';
// import { Device } from '@prisma/client';
import {
  extractFlightPath,
  fetchUniqueData,
} from '../../../../shared/utils/createFlightPath';

@Injectable()
export class RemoteIdentifierService {
  constructor(private prismaService: PrismaService) {}

  async createRemoteIdentifierService(params: RemoteIdentifierDto) {
    const deviceData = await this.prismaService.device.create({
      data: {
        remoteData: params.remoteData,
      },
    });
    return deviceData;
  }

  async getRemoteIdentifierByBoundingBox(
    params: IBoundingBoxData,
  ): Promise<JsonObject[]> {
    const { minLatitude, maxLatitude, minLongitude, maxLongitude } = params;
    console.log(params);
    try {
      const getAllData = await this.prismaService.device.findMany();

      const uniqueData = fetchUniqueData(getAllData as unknown as JsonObject[]);

      const filterData = uniqueData.filter((data: JsonObject) => {
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
}
