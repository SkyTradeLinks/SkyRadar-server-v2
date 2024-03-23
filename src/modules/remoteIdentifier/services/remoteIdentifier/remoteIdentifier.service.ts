import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../services/prisma.service';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';
import { IBoundingBoxData } from '../../../../interfaces/remoteIdentifier.interface';
import { Prisma, Device } from '@prisma/client';

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
    return this.prismaService.device.findMany({
      where: {
        remoteData: {
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
    console.log(params);
    return await this.prismaService.device.findMany({
      where: {
        id: params,
      },
    });
  }
}
