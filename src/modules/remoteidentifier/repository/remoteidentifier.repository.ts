import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Device } from '@prisma/client';

@Injectable()
export class RemoteIdentifierRepository {
  constructor(private prisma: PrismaService) {}

  async createRemoteIdentifier(
    params: Prisma.DeviceCreateInput,
  ): Promise<Device> {
    return this.prisma.device.create({ data: params });
  }
}
