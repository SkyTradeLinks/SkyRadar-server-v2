import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Device } from '@prisma/client';
import { IBoundingBoxData } from 'src/interfaces/remoteIdentifierInterface';

@Injectable()
export class RemoteIdentifierRepository {
  constructor(private prisma: PrismaService) {}

  async createRemoteIdentifier(
    params: Prisma.DeviceCreateInput,
  ): Promise<Device> {
    return this.prisma.device.create({ data: params });
  }

  async getRemoteIdentifierByBoundingBox(
    params: IBoundingBoxData,
  ): Promise<Device[]> {
    const { minLatitude, maxLatitude, minLongitude, maxLongitude } = params;
    return this.prisma.device.findMany({
      where: {
        remotedata: {
          location: {
            latitude: {
              gte: minLatitude,
              lte: maxLatitude,
            },
            longitude: {
              gte: minLongitude,
              lte: maxLongitude,
            },
          },
        } as unknown as Prisma.JsonFilter<'Device'>,
      },
      orderBy: {
        'remotedata.connection.lastSeen': 'asc',
      } as unknown as Prisma.DeviceOrderByWithRelationInput,
    });
  }

  async getRemoteIdentifierByDroneId(params: string): Promise<Device[]> {
    return this.prisma.device.findMany({
      where: {
        id: params,
      },
      orderBy: {
        'remotedata.connection.lastSeen': 'asc',
      } as unknown as Prisma.DeviceOrderByWithRelationInput,
    });
  }
}
