// import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
// import { ComposeDbClientService } from './compose-db_client.service';
// import { ComposeDbClient } from './entities/compose-db_client.entity';
// import { CreateComposeDbClientInput } from './dto/create-compose-db_client.input';
// import { UpdateComposeDbClientInput } from './dto/update-compose-db_client.input';

// @Resolver(() => ComposeDbClient)
// export class ComposeDbClientResolver {
//   constructor(private readonly composeDbClientService: ComposeDbClientService) {}

//   @Mutation(() => ComposeDbClient)
//   createComposeDbClient(@Args('createComposeDbClientInput') createComposeDbClientInput: CreateComposeDbClientInput) {
//     return this.composeDbClientService.create(createComposeDbClientInput);
//   }

//   @Query(() => [ComposeDbClient], { name: 'composeDbClient' })
//   findAll() {
//     return this.composeDbClientService.findAll();
//   }

//   @Query(() => ComposeDbClient, { name: 'composeDbClient' })
//   findOne(@Args('id', { type: () => Int }) id: number) {
//     return this.composeDbClientService.findOne(id);
//   }

//   @Mutation(() => ComposeDbClient)
//   updateComposeDbClient(@Args('updateComposeDbClientInput') updateComposeDbClientInput: UpdateComposeDbClientInput) {
//     return this.composeDbClientService.update(updateComposeDbClientInput.id, updateComposeDbClientInput);
//   }

//   @Mutation(() => ComposeDbClient)
//   removeComposeDbClient(@Args('id', { type: () => Int }) id: number) {
//     return this.composeDbClientService.remove(id);
//   }
// }
