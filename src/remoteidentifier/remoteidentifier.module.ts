import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RemoteidentifierController } from './controllers/remoteidentifier/remoteidentifier.controller';
import { RemoteidentifierService } from './services/remoteidentifier/remoteidentifier.service';
import { RemoteIdentifierModel } from './model/RemoteIdentifier.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/remotehistoricalID'),
    MongooseModule.forFeature([
      { name: 'Remoteidentifier', schema: RemoteIdentifierModel },
    ]),
  ],
  controllers: [RemoteidentifierController],
  providers: [RemoteidentifierService],
})
export class RemoteidentifierModule {}
