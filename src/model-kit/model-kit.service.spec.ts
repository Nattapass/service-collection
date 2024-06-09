import { Test, TestingModule } from '@nestjs/testing';
import { ModelKitService } from './model-kit.service';

describe('ModelKitService', () => {
  let service: ModelKitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModelKitService],
    }).compile();

    service = module.get<ModelKitService>(ModelKitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
