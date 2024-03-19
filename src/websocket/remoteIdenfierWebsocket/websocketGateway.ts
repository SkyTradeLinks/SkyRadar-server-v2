import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  // MessageBody,
} from '@nestjs/websockets';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RemoteIdentifierService } from 'src/modules/remoteIdentifier/services/remoteIdentifier/remoteIdentifierService';
import { Server, Socket } from 'socket.io';
import { Device } from '@prisma/client';
import { IBoundingBoxData } from 'src/interfaces/remoteIdentifierInterface';

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
      return await this.remoteIdentifierService.getRemoteIdentifiersByDroneId(
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
      return await this.remoteIdentifierService.getRemoteIdentifiersByBoundingBox(
        payload,
      );
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
