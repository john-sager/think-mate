import { Injectable } from '@nestjs/common';
import { DecisionEntity } from './decision.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DecisionsService {
  constructor(
    @InjectRepository(DecisionEntity)
    private decisionRepository: Repository<DecisionEntity>,
  ) {}

  async findAll(): Promise<Decision[]> {
    const dbDecisions = await this.decisionRepository.find();

    return dbDecisions.map((dec) => this.toDecision(dec));
  }

  async findOne(id: string): Promise<Decision | null> {
    const dbDecision = await this.decisionRepository.findOneBy({ id });

    return dbDecision ? this.toDecision(dbDecision) : null;
  }

  async create(title: string): Promise<void> {
    const newDecision = this.decisionRepository.create({
      title,
      description: '',
      score: 0,
      status: 'undecided',
    });
    await this.decisionRepository.save(newDecision);
  }

  private toDecision(dbDec: DecisionEntity): Decision {
    return {
      ...dbDec,
    };
  }
}
