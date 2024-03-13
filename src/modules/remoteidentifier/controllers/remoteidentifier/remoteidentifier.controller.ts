import { Body, Controller, Post } from '@nestjs/common';
import { RemoteidentifierService } from '../../services/remoteidentifier/remoteidentifier.service';
import { Prisma } from '@prisma/client';

@Controller('remoteidentifier')
export class RemoteidentifierController {
  userService: any;
  constructor(
    private readonly remoteIdentifierService: RemoteidentifierService,
  ) {}
  @Post()
  async createRemoteIdentifier(@Body() data: Prisma.DeviceCreateInput) {
    return this.remoteIdentifierService.createRemoteIdentifierService(data);
  }
}
