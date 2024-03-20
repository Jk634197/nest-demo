import { Injectable } from '@nestjs/common';

@Injectable()
export class NewAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
