import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RemoteIdentifierService } from 'src/modules/remoteIdentifier/services/remoteIdentifier/remoteIdentifier.service';
import { Server, Socket } from 'socket.io';
import { IBoundingBoxData } from '../../shared/interfaces/remoteIdentifier.interface';

@WebSocketGateway({ cors: true })
export class WebsocketGateway {
  constructor(
    private readonly remoteIdentifierService: RemoteIdentifierService,
  ) { }

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
      let adderLat = [0.0003958,0.0002958,0.0001958];
      let adderLng = [0.0005616,0.0004616,0.0003616];
      let angel = [2,1,2];

      const updateCoordinates = (data) => {
        const updatedData = data?.map((item,index) => {
          const latitude = item?.remoteData?.location?.latitude + adderLat[index];
          const longitude = item?.remoteData?.location?.longitude + adderLng[index];
          const direction = item?.remoteData?.location?.longitude + angel[index];

          // Define realistic bounds for latitude and longitude
          const maxLatitude = 90;
          const minLatitude = -90;
          const maxLongitude = 180;
          const minLongitude = -180;

          // Define bounds for direction (0 - 360 degrees)
          const maxDirection = 360;
          const minDirection = 0;

          // Ensure latitude stays within bounds
          const updatedLatitude = Math.min(Math.max(latitude, minLatitude), maxLatitude);

          // Ensure longitude stays within bounds
          const updatedLongitude = Math.min(Math.max(longitude, minLongitude), maxLongitude);

          // Ensure direction stays within bounds
          const updatedDirection = (direction >= minDirection && direction <= maxDirection) ? direction : (direction % maxDirection + maxDirection) % maxDirection;

          return {
            ...item,
            remoteData: {
              ...item?.remoteData,
              location: {
                latitude: updatedLatitude,
                longitude: updatedLongitude,
                direction: updatedDirection
              }
            }
          };
        });
        return updatedData;
      };

      const boundingBoxData =
        await this.remoteIdentifierService.getRemoteIdentifierByBoundingBox(
          payload,
        );
      console.log(boundingBoxData.length,"length")
      setInterval(() => {
        const updatedData = updateCoordinates(boundingBoxData);
        adderLng[0] += 0.00411616;
        adderLat[0]-=0.0019958;
        adderLng[1] += 0.0034616;
        adderLat[1]-=0.0024958;
        adderLng[2] += 0.0031616;
        adderLat[2]+=0.0015958;
        angel[0] += 0.5;
        angel[1] += 1;
        angel[2] -= 0.5;
        client.emit('boundingBoxResponse', updatedData);
      }, 1000);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
