import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { RemoteIdentifierService } from './services/remoteIdentifier/remoteIdentifier.service';
import { RemoteIdentifierController } from './controllers/remoteIdentifier/remoteIdentifier.controller';
import { BackendInterceptor } from '../../common/interceptors/backend.interceptor';
import { PrismaModule } from '../../services/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RemoteIdentifierController],
  providers: [RemoteIdentifierService, PrismaService, BackendInterceptor],
  exports: [RemoteIdentifierService],
})
export class RemoteidentifierModule {}
