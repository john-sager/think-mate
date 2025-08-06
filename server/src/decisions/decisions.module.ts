import { Module } from '@nestjs/common';
import { DecisionsController } from './decisions.controller';
import { DecisionsService } from './decisions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DecisionEntity } from './decision.entity';

@Module({
  controllers: [DecisionsController],
  providers: [DecisionsService],
  imports: [TypeOrmModule.forFeature([DecisionEntity])],
})
export class DecisionsModule {}
