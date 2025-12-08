import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FactorEntity } from './factors.entity';
import { FactorsService } from './factors.service';

@Module({
  providers: [FactorsService],
  imports: [TypeOrmModule.forFeature([FactorEntity])],
})
export class FactorsModule {}
