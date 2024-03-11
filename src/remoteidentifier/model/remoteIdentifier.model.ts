import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class RemoteIdentifier extends Document {
  @Prop()
  connection: string;

  @Prop()
  identification1: string;

  @Prop()
  identification2: string;

  @Prop()
  id1Shadow: string;

  @Prop()
  id2Shadow: string;

  @Prop()
  location: string;

  @Prop()
  authentication: string;

  @Prop()
  selfid: string;

  @Prop()
  system: string;

  @Prop()
  operatorid: string;

  @Prop()
  macAddress: string;
}

export const RemoteIdentifierModel =
  SchemaFactory.createForClass(RemoteIdentifier);
