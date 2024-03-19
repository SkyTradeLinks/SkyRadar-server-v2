import { Module } from '@nestjs/common';
import { WebsocketGateway } from './remoteIdenfierWebsocket/websocketGateway';
import { RemoteidentifierModule } from '../modules/remoteIdentifier/remoteIdentifierModule';

@Module({
  imports: [RemoteidentifierModule],
  providers: [WebsocketGateway],
})
export class WebsocketModule {}
