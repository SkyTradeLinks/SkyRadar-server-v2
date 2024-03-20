import { Injectable } from '@nestjs/common';
import { RemoteIdentifierRepository } from '../../repository/remoteIdentifierRepository';
import { Prisma } from '@prisma/client';
import { IBoundingBoxData } from '../../../../interfaces/remoteIdentifierInterface';

@Injectable()
export class RemoteIdentifierService {
  constructor(private readonly remoterepository: RemoteIdentifierRepository) {}

  async createRemoteIdentifierService(params: Prisma.DeviceCreateInput) {
    const deviceData =
      await this.remoterepository.createRemoteIdentifier(params);
    return deviceData;
  }

  async getRemoteIdentifiersByBoundingBox(params: IBoundingBoxData) {
    return await this.remoterepository.getRemoteIdentifierByBoundingBox(params);
  }

  async getRemoteIdentifiersByDroneId(params: string) {
    return await this.remoterepository.getRemoteIdentifierByDroneId(params);
  }
}
