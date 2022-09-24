import { Module } from '@nestjs/common';
import { TweestsService } from './tweests.service';
import { TweestsController } from './tweests.controller';

@Module({
  controllers: [TweestsController],
  providers: [TweestsService]
})
export class TweestsModule {}
