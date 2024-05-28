import { Module } from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';
import { PrismaService } from 'src/services/prisma.service';
import { ApiKeysController } from './api-keys.controller';

@Module({
  controllers: [ApiKeysController],
  providers: [ApiKeysService, PrismaService],
})
export class ApiKeysModule {}
