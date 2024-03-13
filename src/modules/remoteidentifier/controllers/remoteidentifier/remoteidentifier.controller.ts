import { Body, Controller, Post } from '@nestjs/common';
import { RemoteidentifierService } from '../../services/remoteidentifier/remoteidentifier.service';
import { Prisma } from '@prisma/client';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('remoteidentifier')
@ApiTags('remoteidentifier')
export class RemoteidentifierController {
  constructor(
    private readonly remoteIdentifierService: RemoteidentifierService,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Create Remote Identification' })
  async createRemoteIdentifier(@Body() data: Prisma.DeviceCreateInput) {
    return this.remoteIdentifierService.createRemoteIdentifierService(data);
  }
}
