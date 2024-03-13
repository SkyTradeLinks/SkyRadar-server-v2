/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create(AppModule,  new ExpressAdapter(expressApp));
  app.enableCors();
  app.setGlobalPrefix('api');
  SwaggerModule.setup('api/docs', app, null, { swaggerUrl: 'api-json' });
  await app.listen(3000);
}
bootstrap();
