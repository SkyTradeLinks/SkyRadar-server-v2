import { Test, TestingModule } from '@nestjs/testing';
import { RemoteIdentifierService } from '../../modules/remoteIdentifier/services/remoteIdentifier/remoteIdentifier.service';

describe('RemoteidentifierService', () => {
  let service: RemoteIdentifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoteIdentifierService],
    }).compile();

    service = module.get<RemoteIdentifierService>(RemoteIdentifierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
