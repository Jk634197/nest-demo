import { MiddlewareConsumer, Module } from '@nestjs/common';
import { NewAppController } from './new-app.controller';
import { NewAppService } from './new-app.service';
import { LoggerMiddleware } from '@app/logger/logger.middleware';
import { LoggerService } from '@app/logger';

@Module({
  imports: [],
  controllers: [NewAppController],
  providers: [NewAppService, LoggerService],
})
export class NewAppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
