import { Injectable } from '@nestjs/common';

@Injectable() // é um decoretor tbm, e significa que ele pode ser injetavel em outros logares ou seja podemos utiliar ele em outros locais
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
