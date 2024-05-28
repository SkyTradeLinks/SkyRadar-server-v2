import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateComposeDbClientInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
