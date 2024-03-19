import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject } from 'class-validator';

export class RemoteIdentifierDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  remoteData: any;
}
