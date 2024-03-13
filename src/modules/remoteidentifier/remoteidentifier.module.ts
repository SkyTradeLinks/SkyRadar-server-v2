import { Module } from '@nestjs/common';
import { RemoteidentifierController } from './controllers/remoteidentifier/remoteidentifier.controller';
import { RemoteidentifierService } from './services/remoteidentifier/remoteidentifier.service';
import { PrismaModule } from 'src/database/prisma.module';
import { RemoteIdentifierRepository } from './repository/remoteidentifier.repository';
import { SwaggerModules } from './documentation/swagger.module';

@Module({
  imports: [PrismaModule, SwaggerModules],
  controllers: [RemoteidentifierController],
  providers: [RemoteidentifierService, RemoteIdentifierRepository],
  exports: [RemoteidentifierService],
})
export class RemoteidentifierModule {}
