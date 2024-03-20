import { Test, TestingModule } from '@nestjs/testing';
import { WebsocketGateway } from '../../web-socket/remoteIdWebSocket/remoteIdWebSocket.gateway';
import { RemoteIdentifierService } from '../../modules/remoteidentifier/services/remoteIdentifier/remoteIdentifier.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Socket } from 'socket.io';
import { IBoundingBoxData } from '../../interfaces/remoteIdentifier.interface';
import { Device } from '@prisma/client';

describe('WebsocketGateway', () => {
  let websocketGateway: WebsocketGateway;
  let remoteIdentifierService: RemoteIdentifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WebsocketGateway,
        {
          provide: RemoteIdentifierService,
          useValue: {
            getRemoteIdentifierByDroneId: jest.fn(),
            getRemoteIdentifierByBoundingBox: jest.fn(),
          },
        },
      ],
    }).compile();

    websocketGateway = module.get<WebsocketGateway>(WebsocketGateway);
    remoteIdentifierService = module.get<RemoteIdentifierService>(
      RemoteIdentifierService,
    );
  });

  it('should be defined', () => {
    expect(websocketGateway).toBeDefined();
  });

  describe('getRemoteIdentifierByDroneId', () => {
    const client: Socket = {} as Socket;
    const payload = '61b5ce50-9f4a-46b0-9cae-650baac6593d';

    it('should return remote identifiers', async () => {
      const mockDevices: Device[] = [];
      (
        remoteIdentifierService.getRemoteIdentifierByDroneId as jest.Mock
      ).mockResolvedValue(mockDevices);

      const result = await websocketGateway.getRemoteIdentifierByDroneId(
        client,
        payload,
      );

      expect(result).toEqual(mockDevices);
    });

    it('should throw an error if service call fails', async () => {
      const error = new Error('Service call failed');
      (
        remoteIdentifierService.getRemoteIdentifierByDroneId as jest.Mock
      ).mockRejectedValue(error);

      await expect(
        websocketGateway.getRemoteIdentifierByDroneId(client, payload),
      ).rejects.toThrow(
        new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });

  describe('getRemoteIdentifierByBoundingBox', () => {
    const client: Socket = {} as Socket;
    const payload: IBoundingBoxData = {
      minLatitude: 40.7128,
      maxLatitude: 49.955,
      minLongitude: 2.0884,
      maxLongitude: -8.6491,
    };

    it('should return remote identifiers', async () => {
      const mockDevices: Device[] = [];
      (
        remoteIdentifierService.getRemoteIdentifierByBoundingBox as jest.Mock
      ).mockResolvedValue(mockDevices);

      const result = await websocketGateway.getRemoteIdentifierByBoundingBox(
        client,
        payload,
      );

      expect(result).toEqual(mockDevices);
    });

    it('should throw an error if service call fails', async () => {
      const error = new Error('Service call failed');
      (
        remoteIdentifierService.getRemoteIdentifierByBoundingBox as jest.Mock
      ).mockRejectedValue(error);

      await expect(
        websocketGateway.getRemoteIdentifierByBoundingBox(client, payload),
      ).rejects.toThrow(
        new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });
});
