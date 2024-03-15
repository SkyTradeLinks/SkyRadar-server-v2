import { Test, TestingModule } from '@nestjs/testing';
import { RemoteIdentifierController } from './remoteIdentifier.controller';

describe('RemoteidentifierController', () => {
  let controller: RemoteIdentifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoteIdentifierController],
    }).compile();

    controller = module.get<RemoteIdentifierController>(
      RemoteIdentifierController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
