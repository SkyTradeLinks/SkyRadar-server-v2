import { Module } from '@nestjs/common';
import { WebsocketGateway } from './remoteIdenfierWebsocket/websocketGateway';

@Module({
  providers: [WebsocketGateway],
})
export class WebsocketModule {}
