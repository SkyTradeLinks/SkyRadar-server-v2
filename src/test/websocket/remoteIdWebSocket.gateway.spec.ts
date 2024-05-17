import { Test, TestingModule } from '@nestjs/testing';
import { WebsocketGateway } from '../../web-socket/remoteIdWebSocket/remoteIdWebSocket.gateway';
import { RemoteIdentifierService } from '../../modules/remoteidentifier/services/remoteIdentifier/remoteIdentifier.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as ioClient from 'socket.io-client';
import { createServer, Server as HttpServer, Server } from 'http';
import { Socket } from 'socket.io';
import * as SocketIOClient from 'socket.io-client';
import { IBoundingBoxData } from '../../shared/interfaces/remoteIdentifier.interface';
import { Device } from '@prisma/client';

describe('WebsocketGateway', () => {
  let websocketGateway: WebsocketGateway;
  let remoteIdentifierService: RemoteIdentifierService;
  let ioServer: Server;
  let httpServer: HttpServer;
  let socketClient: SocketIOClient.Socket;
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
    // Create an HTTP server
    httpServer = createServer();

    // Create a Socket.IO server
    ioServer = new HttpServer(httpServer);

    // Start the HTTP server
    httpServer.listen(3000); // Replace with the desired port

    // Connect a Socket.IO client
    socketClient = ioClient.connect('http://localhost:3000');
  });

  afterEach(() => {
    // Close the Socket.IO client
    socketClient.close();

    // Close the Socket.IO server
    ioServer.close();

    // Close the HTTP server
    httpServer.close();
  });

  it('should be defined', () => {
    expect(websocketGateway).toBeDefined();
  });

  describe('getRemoteIdentifierByDroneId', () => {
    const client: Socket = {} as Socket;
    const payload = 'cluclysdf0000g5lt3k3eelun';

    it('should return remote identifiers', async () => {
      const mockDevices: Device[] = [];
      (
        remoteIdentifierService.getRemoteIdentifierByDroneMacAddress as jest.Mock
      ).mockResolvedValue(mockDevices);

      const result = await websocketGateway.getRemoteIdentifierByDroneId(
        client,
        payload,
      );

      expect(result).toEqual(result);
    });

    it('should throw an error if service call fails', async () => {
      const error = new Error('Service call failed');
      (
        remoteIdentifierService.getRemoteIdentifierByDroneMacAddress as jest.Mock
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

    it('should emit boundingBoxResponse event', (done) => {
      const boundingBoxData = {
        minLatitude: 40.7128,
        maxLatitude: 49.955,
        minLongitude: 2.0884,
        maxLongitude: -8.6491,
      };
      const expectedResult = {
        event: 'boundingBoxResponse',
        data: boundingBoxData,
      };
      // Listen for the boundingBoxResponse event on the client
      socketClient.on('boundingBoxResponse', (data: typeof boundingBoxData) => {
        // Expect the received data to match the expected result
        expect(data).toEqual(expectedResult.data);
        done();
      });
      // Call the method you want to test
      websocketGateway.getRemoteIdentifierByBoundingBox(
        client,
        boundingBoxData,
      );
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
