import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../services/prisma.service';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';
import { IBoundingBoxData } from '../../../../interfaces/remoteIdentifier.interface';
import { Device } from '@prisma/client';

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
      });
    } catch (error) {
      console.error('Error fetching devices:', error);
    }
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
