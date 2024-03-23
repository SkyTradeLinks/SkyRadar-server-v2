import { Test, TestingModule } from '@nestjs/testing';
import { RemoteIdentifierController } from 'src/modules/remoteIdentifier/controllers/remoteIdentifier/remoteIdentifier.controller';

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

  describe('identity', () => {
    it('should return the same number has what was sent', async () => {
      await expect(controller.identity(1)).resolves.toBe(1);
    });
  });
});
