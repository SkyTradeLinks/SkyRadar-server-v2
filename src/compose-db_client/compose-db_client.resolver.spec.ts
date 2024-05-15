import { Test, TestingModule } from '@nestjs/testing';
import { ComposeDbClientResolver } from './compose-db_client.resolver';
import { ComposeDbClientService } from './compose-db_client.service';

describe('ComposeDbClientResolver', () => {
  let resolver: ComposeDbClientResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComposeDbClientResolver, ComposeDbClientService],
    }).compile();

    resolver = module.get<ComposeDbClientResolver>(ComposeDbClientResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
