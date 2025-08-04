import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecisionsModule } from '../decisions/decisions.module';

@Module({
  imports: [DecisionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
