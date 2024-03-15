import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { RemoteidentifierModule } from './modules/remoteidentifier/remoteidentifier.module';
import { PrismaExceptionFilter } from './filters/remoteidentifier-exceptions/prismaException.filter';
import { AuthSignatureMiddleware } from './middleware/authsignature/authSignature.middleware';

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
    consumer.apply(AuthSignatureMiddleware).forRoutes({
      path: 'remoteidentifier',
      method: RequestMethod.POST,
    });
  }
}
