import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { DatabseService } from './databse/databse.service';
import { TweestsModule } from './tweests/tweests.module';

//decorators

@Module({
  imports: [TweestsModule],
  controllers: [AppController, TestController],
  providers: [AppService, DatabseService],
})
export class AppModule {}
