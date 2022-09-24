// o codigo inicia aqui
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // criando instncia do modulo
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
