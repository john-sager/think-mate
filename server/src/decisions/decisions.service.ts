import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DecisionEntity } from './decision.entity';

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
    const dbDecision = await this.decisionRepository.findOne({
      where: { id },
      relations: ['factors'],
    });

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

  async update(id: string, dec: UpdateDecisionDto): Promise<void> {
    await this.decisionRepository.update(id, dec);
  }

  private toDecision(dbDec: DecisionEntity): Decision {
    console.dir(dbDec);
    return {
      ...dbDec,
    };
  }
}
