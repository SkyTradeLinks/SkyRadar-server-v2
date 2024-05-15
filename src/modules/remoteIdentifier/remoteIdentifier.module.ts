import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { ComposeDbClientService } from 'src/compose-db_client/compose-db_client.service';
import { RemoteIdentifierService } from './services/remoteIdentifier/remoteIdentifier.service';
import { RemoteIdentifierController } from './controllers/remoteIdentifier/remoteIdentifier.controller';
import { BackendInterceptor } from 'src/common/interceptors/backend.interceptor';

@Module({
  imports: [],
  controllers: [RemoteIdentifierController],
  providers: [
    ComposeDbClientService,
    RemoteIdentifierService,
    PrismaService,
    BackendInterceptor,
  ],
  exports: [],
})
export class RemoteidentifierModule {}
