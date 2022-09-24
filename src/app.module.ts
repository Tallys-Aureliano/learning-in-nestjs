import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { DatabseService } from './databse/databse.service';

//decorators

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, DatabseService],
})
export class AppModule {}
