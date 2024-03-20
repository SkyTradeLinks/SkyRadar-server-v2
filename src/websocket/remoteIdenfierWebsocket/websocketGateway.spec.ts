import { Test, TestingModule } from '@nestjs/testing';
import { WebsocketGateway } from './websocketGateway';
import { RemoteIdentifierService } from '../../modules/remoteIdentifier/services/remoteIdentifier/remoteIdentifierService';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Socket } from 'socket.io';
import { IBoundingBoxData } from '../../interfaces/remoteIdentifierInterface';
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
            getRemoteIdentifiersByDroneId: jest.fn(),
            getRemoteIdentifiersByBoundingBox: jest.fn(),
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
    const payload = 'droneId';

    it('should return remote identifiers', async () => {
      const mockDevices: Device[] = []; // Mock the devices array
      (
        remoteIdentifierService.getRemoteIdentifiersByDroneId as jest.Mock
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
        remoteIdentifierService.getRemoteIdentifiersByDroneId as jest.Mock
      ).mockRejectedValue(error);

      await expect(
        websocketGateway.getRemoteIdentifierByDroneId(client, payload),
      ).rejects.toThrowError(
        new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });

  describe('getRemoteIdentifierByBoundingBox', () => {
    const client: Socket = {} as Socket;
    const payload: IBoundingBoxData = {
      minLatitude: 0,
      maxLatitude: 0,
      minLongitude: 0,
      maxLongitude: 0,
    }; // Mock the bounding box data

    it('should return remote identifiers', async () => {
      const mockDevices: Device[] = []; // Mock the devices array
      (
        remoteIdentifierService.getRemoteIdentifiersByBoundingBox as jest.Mock
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
        remoteIdentifierService.getRemoteIdentifiersByBoundingBox as jest.Mock
      ).mockRejectedValue(error);

      await expect(
        websocketGateway.getRemoteIdentifierByBoundingBox(client, payload),
      ).rejects.toThrowError(
        new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });
});
