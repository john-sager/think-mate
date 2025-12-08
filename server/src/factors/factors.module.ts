import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FactorEntity } from './factors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactorEntity])],
})
export class FactorsModule {}
