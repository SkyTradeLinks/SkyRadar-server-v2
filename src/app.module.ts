import { Module } from '@nestjs/common';
import { RemoteidentifierModule } from './remoteidentifier/remoteidentifier.module';

@Module({
  imports: [RemoteidentifierModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
