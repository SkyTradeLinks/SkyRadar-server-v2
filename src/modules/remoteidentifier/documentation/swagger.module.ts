import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RemoteidentifierModule } from '../remoteidentifier.module';

@Module({})
export class SwaggerModules {
  static async configure() {
    const app = await NestFactory.create(RemoteidentifierModule);
    const options = new DocumentBuilder()
      .setTitle('SkyTrade Server Documentation')
      .setDescription(
        'API Documentation For SkyTrade Remote Identification Server',
      )
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
}
