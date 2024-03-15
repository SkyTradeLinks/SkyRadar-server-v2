import { Injectable } from '@nestjs/common';
import { RemoteIdentifierRepository } from '../../repository/remoteIdentifier.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class RemoteIdentifierService {
  constructor(private readonly remoterepository: RemoteIdentifierRepository) {}

  async createRemoteIdentifierService(params: Prisma.DeviceCreateInput) {
    const deviceData =
      await this.remoterepository.createRemoteIdentifier(params);
    return deviceData;
  }
}
