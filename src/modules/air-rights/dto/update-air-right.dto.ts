import { PartialType } from '@nestjs/swagger';
import { CreateAirRightDto } from './create-air-right.dto';

export class UpdateAirRightDto extends PartialType(CreateAirRightDto) {}
