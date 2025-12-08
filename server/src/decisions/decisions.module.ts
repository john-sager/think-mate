import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DecisionsController } from './decisions.controller';
import { DecisionsService } from './decisions.service';
import { DecisionEntity } from './decision.entity';
import { FactorsService } from '../factors/factors.service';
import { FactorEntity } from '../factors/factors.entity';

@Module({
  controllers: [DecisionsController],
  providers: [DecisionsService, FactorsService],
  imports: [TypeOrmModule.forFeature([DecisionEntity, FactorEntity])],
})
export class DecisionsModule {}
