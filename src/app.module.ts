import { Module } from '@nestjs/common';
import { RemoteidentifierModule } from '../src/modules/remoteidentifier/remoteidentifier.module';

@Module({
  imports: [RemoteidentifierModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
