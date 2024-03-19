import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RemoteIdentifierService } from '../../services/remoteIdentifier/remoteIdentifier.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';
import { BackendInterceptor } from 'src/common/interceptors/backend.interceptor';

@Controller('remoteIdentifier')
@ApiTags('remoteIdentifier')
@UseInterceptors(BackendInterceptor)
export class RemoteIdentifierController {
  constructor(
    private readonly remoteIdentifierService: RemoteIdentifierService,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Create Remote Identification' })
  @ApiCreatedResponse({ description: 'Remote Identifiction has been created' })
  @UsePipes(new ValidationPipe())
  async createRemoteIdentifier(@Body() remotedata: RemoteIdentifierDto) {
    return this.remoteIdentifierService.createRemoteIdentifierService(
      remotedata,
    );
  }
}
