import { Test, TestingModule } from '@nestjs/testing';
import { RemoteidentifierService } from './remoteidentifier.service';

describe('RemoteidentifierService', () => {
  let service: RemoteidentifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoteidentifierService],
    }).compile();

    service = module.get<RemoteidentifierService>(RemoteidentifierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
