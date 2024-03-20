import { NestFactory } from '@nestjs/core';
import { NewAppModule } from './new-app.module';

async function bootstrap() {
  const app = await NestFactory.create(NewAppModule);
  await app.listen(3000);
}
bootstrap();
