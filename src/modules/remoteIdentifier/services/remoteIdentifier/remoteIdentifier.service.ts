import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../services/prisma.service';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';
import {
  IBoundingBoxData,
  JsonObject,
} from '../../../../shared/interfaces/remoteIdentifier.interface';
import { Device } from '@prisma/client';
import { extractFlightPath } from '../../../../shared/utils/createFlightPath';

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
  ): Promise<Device[]> {
    const { minLatitude, maxLatitude, minLongitude, maxLongitude } = params;
    console.log(params);
    try {
      return await this.prismaService.device.findMany({
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
    } catch (error) {
      console.error('Error fetching devices:', error);
    }
  }

  async getRemoteIdentifierByDroneMacAddress(
    params: string,
  ): Promise<JsonObject[][]> {
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
    return extractFlightPath(singleDroneData as any);
  }
}
