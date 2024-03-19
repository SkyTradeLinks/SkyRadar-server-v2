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
}
