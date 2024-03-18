import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RemoteIdentifierService } from '../../services/remoteIdentifier/remoteIdentifier.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { RemoteIdentifierEntity } from '../../dto/remoteIdentifier.dto';

@Controller('remoteidentifier')
@ApiTags('remoteidentifier')
export class RemoteIdentifierController {
  constructor(
    private readonly remoteIdentifierService: RemoteIdentifierService,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Create Remote Identification' })
  @ApiCreatedResponse({ description: 'Remote Identifiction has been created' })
  @UsePipes(new ValidationPipe())
  async createRemoteIdentifier(@Body() remotedata: RemoteIdentifierEntity) {
    return this.remoteIdentifierService.createRemoteIdentifierService(
      remotedata,
    );
  }
}
