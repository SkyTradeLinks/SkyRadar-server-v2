import { Module } from '@nestjs/common';
import { WebsocketGateway } from './remoteIdWebSocket/remoteIdWebSocket.gateway';
import { RemoteidentifierModule } from 'src/modules/remoteIdentifier/remoteIdentifier.module';
// import { RemoteIdentifierService } from 'src/modules/remoteIdentifier/services/remoteIdentifier/remoteIdentifier.service';

@Module({
  imports: [RemoteidentifierModule],
  providers: [WebsocketGateway],
})
export class WebsocketModule {}
