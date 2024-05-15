import { Test, TestingModule } from '@nestjs/testing';
import { ComposeDbClientService } from './compose-db_client.service';

describe('ComposeDbClientService', () => {
  let service: ComposeDbClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComposeDbClientService],
    }).compile();

    service = module.get<ComposeDbClientService>(ComposeDbClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
