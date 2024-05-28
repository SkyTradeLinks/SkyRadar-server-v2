import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { ComposeDbClientService } from 'src/compose-db_client/compose-db_client.service';
import { RemoteIdentifierService } from './services/remoteIdentifier/remoteIdentifier.service';
import { RemoteIdentifierController } from './controllers/remoteIdentifier/remoteIdentifier.controller';
import { BackendInterceptor } from '../../common/interceptors/backend.interceptor';

@Module({
  imports: [],
  controllers: [RemoteIdentifierController],
  providers: [
    ComposeDbClientService,
    RemoteIdentifierService,
    PrismaService,
    BackendInterceptor,
  ],
  exports: [RemoteIdentifierService],
})
export class RemoteidentifierModule {}
