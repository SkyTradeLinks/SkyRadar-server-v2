import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { PrismaExceptionFilter } from './common/filters/prismaException.filter';
import { RemoteidentifierModule } from './modules/remoteIdentifier/remoteIdentifier.module';
import { ConfigModule } from '@nestjs/config';
import { WebsocketModule } from './web-socket/webSocketModule';
import { AirRightsModule } from './modules/air-rights/air-rights.module';
import * as Joi from 'joi';

@Module({
  imports: [
    RemoteidentifierModule,
    WebsocketModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().port().default(5000),
        FRONTEND_API_KEY: Joi.string().required(),
        FRONTEND_DOMAIN: Joi.string().required(),
        FRONTEND_URI: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    AirRightsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: PrismaExceptionFilter,
    },
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AuthSignatureMiddleware).forRoutes({
  //     path: 'remoteIdentifier',
  //     method: RequestMethod.POST,
  //   });
  // }
}
