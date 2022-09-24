import { Test, TestingModule } from '@nestjs/testing';
import { TweestsController } from './tweests.controller';
import { TweestsService } from './tweests.service';

describe('TweestsController', () => {
  let controller: TweestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TweestsController],
      providers: [TweestsService],
    }).compile();

    controller = module.get<TweestsController>(TweestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
