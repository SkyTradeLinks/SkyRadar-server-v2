import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
config();

async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('SkyRadar server')
    .setDescription('API is for SkyRadar Server remote indentification')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = +process.env.PORT || 3000;

  await app.listen(3000);

  console.log(`\n\n
    --------------------------------------------------
      Server is listening ${await app.getUrl()}
    --------------------------------------------------
    \n`);
}
bootstrap();
