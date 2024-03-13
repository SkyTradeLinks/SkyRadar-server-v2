import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { RemoteidentifierModule } from './modules/remoteidentifier/remoteidentifier.module';
import { PrismaExceptionFilter } from './modules/remoteidentifier/exceptions/prisma-exception.filter';

@Module({
  imports: [RemoteidentifierModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: PrismaExceptionFilter,
    },
  ],
})
export class AppModule {}
