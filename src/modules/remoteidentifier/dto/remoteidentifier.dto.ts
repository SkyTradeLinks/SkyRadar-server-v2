import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject } from 'class-validator';

export class RemoteIdentifierEntity {
  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  remotedata: Record<string, any>;
}
