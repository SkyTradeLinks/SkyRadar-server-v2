import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RemoteIdentifierService } from '../../modules/remoteidentifier/services/remoteIdentifier/remoteIdentifier.service';
import { Server, Socket } from 'socket.io';
import { IBoundingBoxData } from '../../interfaces/remoteIdentifier.interface';

@WebSocketGateway({ cors: true })
export class WebsocketGateway {
  constructor(
    private readonly remoteIdentifierService: RemoteIdentifierService,
  ) {}

  @WebSocketServer()
  server: Server;
  @SubscribeMessage('sendMessageByDroneId')
  async getRemoteIdentifierByDroneId(client: Socket, payload: string) {
    try {
      const droneData =
        await this.remoteIdentifierService.getRemoteIdentifierByDroneId(
          payload,
        );
      client.emit('droneIdResponse', droneData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @SubscribeMessage('sendMessageByBoundingBox')
  async getRemoteIdentifierByBoundingBox(
    client: Socket,
    payload: IBoundingBoxData,
  ) {
    try {
      const boundingBoxData =
        await this.remoteIdentifierService.getRemoteIdentifierByBoundingBox(
          payload,
        );
      client.emit('boundingBoxResponse', boundingBoxData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
