import { CreateComposeDbClientInput } from './create-compose-db_client.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateComposeDbClientInput extends PartialType(CreateComposeDbClientInput) {
  @Field(() => Int)
  id: number;
}
