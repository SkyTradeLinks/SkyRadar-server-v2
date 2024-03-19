import { Test, TestingModule } from '@nestjs/testing';
import * as io from 'socket.io-client';
import { Socket } from 'socket.io-client';
import { AppModule } from '../../appModule';
import { INestApplication } from '@nestjs/common';

describe('WebsocketGateway', () => {
  let app: INestApplication;
  let clientSocket: Socket;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.listen(3000); // Change the port as per your configuration

    clientSocket = io.connect('http://localhost:3000');
  });

  afterAll(async () => {
    clientSocket.disconnect();
    await app.close();
  });

  it('should receive and send messages', (done) => {
    clientSocket.on('connect', () => {
      // Simulate sending a message from the client
      clientSocket.emit('sendMessageByDroneId', 'Hello from client');

      // Wait for message from the server
      clientSocket.on('sendMessageByDroneId', (message: string) => {
        expect(message).toEqual('Hello from client');

        // Send a response back to the client
        clientSocket.emit('sendMessageByDroneId', 'Hello from server');
      });

      // Wait for response from the server
      clientSocket.on('sendMessageByDroneId', (message: string) => {
        expect(message).toEqual('Hello from server');
        done(); // Complete the test
      });
    });
  });
});
