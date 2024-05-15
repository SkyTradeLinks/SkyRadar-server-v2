import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';

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

  async getDroneData(params) {
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

  async getDrones(params) {
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
