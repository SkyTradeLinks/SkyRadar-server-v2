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
      const boundingBoxUniqueData = await this.prismaService.device.findMany({
        where: {
          AND: [
            {
              remoteData: {
                path: ['location', 'latitude'],
                gte: minLatitude,
                lte: maxLatitude,
                not: 0,
              },
            },
            {
              remoteData: {
                path: ['location', 'longitude'],
                gte: minLongitude,
                lte: maxLongitude,
                not: 0,
              },
            },
          ],
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
      return fetchUniqueData(boundingBoxUniqueData as unknown as JsonObject[]);
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
    return { flightPath };
  }
}
