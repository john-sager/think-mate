import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { FactorEntity } from './factors.entity';

@Injectable()
export class FactorsService {
  constructor(
    @InjectRepository(FactorEntity)
    private factorRepository: Repository<FactorEntity>,
  ) {}

  async create(title: string): Promise<void> {
    const newFactor = this.factorRepository.create({
      title,
      description: '',
      type: 'pro',
      score: 0,
    });
    await this.factorRepository.save(newFactor);
  }

  async update(id: string, factor: UpdateFactorDto): Promise<void> {
    await this.factorRepository.update(id, factor);
  }
}
