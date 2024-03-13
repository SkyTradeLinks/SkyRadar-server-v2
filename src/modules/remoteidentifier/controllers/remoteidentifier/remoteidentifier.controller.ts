import { Body, Controller, Post } from '@nestjs/common';
import { RemoteidentifierService } from '../../services/remoteidentifier/remoteidentifier.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { RemoteIdentifierEntity } from '../../dto/remoteidentifier.dto';

@Controller('remoteidentifier')
@ApiTags('remoteidentifier')
export class RemoteidentifierController {
  constructor(
    private readonly remoteIdentifierService: RemoteidentifierService,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Create Remote Identification' })
  @ApiCreatedResponse({ description: 'Remote Identifiction has been created' })
  async createRemoteIdentifier(@Body() data: RemoteIdentifierEntity) {
    return this.remoteIdentifierService.createRemoteIdentifierService(data);
  }
}
