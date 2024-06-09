import { Test, TestingModule } from '@nestjs/testing';
import { ModelKitController } from './model-kit.controller';

describe('MangaController', () => {
  let controller: ModelKitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModelKitController],
    }).compile();

    controller = module.get<ModelKitController>(ModelKitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
