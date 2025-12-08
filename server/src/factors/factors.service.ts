import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { FactorEntity } from './factors.entity';
import { DecisionEntity } from '../decisions/decision.entity';

@Injectable()
export class FactorsService {
  constructor(
    @InjectRepository(FactorEntity)
    private factorRepository: Repository<FactorEntity>,
    @InjectRepository(DecisionEntity)
    private decisionRepository: Repository<DecisionEntity>,
  ) {}

  async create(
    decisionId: string,
    title: string,
    type: FactorType,
  ): Promise<void> {
    const dbDecision = await this.decisionRepository.findOneBy({
      id: decisionId,
    });
    if (dbDecision) {
      const newFactor = this.factorRepository.create({
        title,
        description: '',
        type: type,
        score: 1,
        decision: dbDecision,
      });
      await this.factorRepository.save(newFactor);
    }
  }

  async update(id: string, factor: UpdateFactorDto): Promise<void> {
    await this.factorRepository.update(id, factor);
  }
}
