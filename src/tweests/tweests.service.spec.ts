import { Test, TestingModule } from '@nestjs/testing';
import { TweestsService } from './tweests.service';

describe('TweestsService', () => {
  let service: TweestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweestsService],
    }).compile();

    service = module.get<TweestsService>(TweestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
