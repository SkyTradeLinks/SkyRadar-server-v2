import { Module } from '@nestjs/common';
import { RemoteIdentifierController } from './controllers/remoteidentifier/remoteIdentifier.controller';
import { RemoteIdentifierService } from './services/remoteidentifier/remoteIdentifier.service';
import { PrismaModule } from 'src/database/prisma.module';
import { RemoteIdentifierRepository } from './repository/remoteIdentifier.repository';

@Module({
  imports: [PrismaModule],
  controllers: [RemoteIdentifierController],
  providers: [RemoteIdentifierService, RemoteIdentifierRepository],
  exports: [RemoteIdentifierService],
})
export class RemoteidentifierModule {}
