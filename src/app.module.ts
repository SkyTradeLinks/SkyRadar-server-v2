import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { RemoteidentifierModule } from './modules/remoteidentifier/remoteidentifier.module';
import { PrismaExceptionFilter } from './filters/remoteidentifier-exceptions/prisma-exception.filter';
import { AuthsignatureMiddleware } from './middleware/authsignature/authsignature.middleware';

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
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthsignatureMiddleware).forRoutes({
      path: 'remoteidentifier',
      method: RequestMethod.POST,
    });
  }
}
