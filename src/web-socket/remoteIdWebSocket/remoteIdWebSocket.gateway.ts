import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RemoteIdentifierService } from '../../modules/remoteidentifier/services/remoteIdentifier/remoteIdentifier.service';
import { Server, Socket } from 'socket.io';
import { Device } from '@prisma/client';
import { IBoundingBoxData } from '../../interfaces/remoteIdentifier.interface';

@WebSocketGateway()
export class WebsocketGateway {
  constructor(
    private readonly remoteIdentifierService: RemoteIdentifierService,
  ) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessageByDroneId')
  async getRemoteIdentifierByDroneId(
    client: Socket,
    payload: string,
  ): Promise<Device[]> {
    try {
      return await this.remoteIdentifierService.getRemoteIdentifierByDroneId(
        payload,
      );
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @SubscribeMessage('sendMessageByBoundingBox')
  async getRemoteIdentifierByBoundingBox(
    client: Socket,
    payload: IBoundingBoxData,
  ): Promise<Device[]> {
    try {
      return await this.remoteIdentifierService.getRemoteIdentifierByBoundingBox(
        payload,
      );
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
