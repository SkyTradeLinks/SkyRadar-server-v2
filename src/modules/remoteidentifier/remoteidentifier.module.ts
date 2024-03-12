import { Module } from '@nestjs/common';
import { RemoteidentifierController } from './controllers/remoteidentifier/remoteidentifier.controller';
import { RemoteidentifierService } from './services/remoteidentifier/remoteidentifier.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RemoteidentifierController],
  providers: [RemoteidentifierService],
})
export class RemoteidentifierModule {}
