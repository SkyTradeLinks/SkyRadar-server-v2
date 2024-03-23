import {
  Body,
  Controller,
  Post,
  // UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { RemoteIdentifierService } from '../../services/remoteIdentifier/remoteIdentifier.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';
import { Server } from 'socket.io';
// import { BackendInterceptor } from 'src/common/interceptors/backend.interceptor';

@Controller('remoteIdentifier')
@ApiTags('remoteIdentifier')
// @UseInterceptors(BackendInterceptor)

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RemoteIdentifierController {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly remoteIdentifierService: RemoteIdentifierService,
  ) {}
  @Post('/')
  @ApiOperation({ summary: 'Create Remote Identification' })
  @ApiCreatedResponse({ description: 'Remote Identifiction has been created' })
  @UsePipes(new ValidationPipe())
  async createRemoteIdentifier(@Body() remotedata: RemoteIdentifierDto) {
    return this.remoteIdentifierService.createRemoteIdentifierService(
      remotedata,
    );
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
