import { Module } from '@nestjs/common';
import { RemoteIdentifierController } from './controllers/remoteIdentifier/remoteIdentifierController';
import { RemoteIdentifierService } from './services/remoteIdentifier/remoteIdentifierService';
import { PrismaModule } from 'src/database/prismaModule';
import { RemoteIdentifierRepository } from './repository/remoteIdentifierRepository';

@Module({
  imports: [PrismaModule],
  controllers: [RemoteIdentifierController],
  providers: [RemoteIdentifierService, RemoteIdentifierRepository],
  exports: [RemoteIdentifierService],
})
export class RemoteidentifierModule {}
