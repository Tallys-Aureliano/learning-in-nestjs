import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('prefixo') //prefixo do controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('teste') ///get
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('teste2') ///get
  acao(): string {
    return 'Testando o modulos';
  }
}
