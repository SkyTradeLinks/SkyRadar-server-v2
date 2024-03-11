import { IsNotEmpty } from 'class-validator';

export class CreateRemoteIdentifier {
  @IsNotEmpty()
  connection: string;

  @IsNotEmpty()
  identification1: string;

  @IsNotEmpty()
  identification2: string;

  @IsNotEmpty()
  id1Shadow: string;

  @IsNotEmpty()
  id2Shadow: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  authentication: string;

  @IsNotEmpty()
  selfid: string;

  @IsNotEmpty()
  system: string;

  @IsNotEmpty()
  operatorid: string;

  @IsNotEmpty()
  macAddress: string;
}
