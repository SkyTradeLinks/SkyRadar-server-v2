import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { IBoundingBoxData } from '../../shared/interfaces/remoteIdentifier.interface';
import { RemoteIdentifierService } from 'src/modules/remoteIdentifier/services/remoteIdentifier/remoteIdentifier.service';

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
        await this.remoteIdentifierService.getRemoteIdentifierByDroneMacAddress(
          payload,
        );

      console.log(droneData);
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
