import { Module } from '@nestjs/common';
import { ComposeDbClientService } from './compose-db_client.service';
// import { ComposeDbClientResolver } from './compose-db_client.resolver';

@Module({
  imports: [],
  providers: [ComposeDbClientService],
})
export class ComposeDbClientModule {}
