import { Module } from '@nestjs/common';
import { AirRightsService } from './air-rights.service';
import { AirRightsController } from './air-rights.controller';

@Module({
  controllers: [AirRightsController],
  providers: [AirRightsService],
})
export class AirRightsModule {}
