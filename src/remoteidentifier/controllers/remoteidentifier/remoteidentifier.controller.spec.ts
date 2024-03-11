import { Test, TestingModule } from '@nestjs/testing';
import { RemoteidentifierController } from './remoteidentifier.controller';

describe('RemoteidentifierController', () => {
  let controller: RemoteidentifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoteidentifierController],
    }).compile();

    controller = module.get<RemoteidentifierController>(
      RemoteidentifierController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
