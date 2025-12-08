import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DecisionEntity } from '../decisions/decision.entity';

@Entity('factors')
export class FactorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => DecisionEntity, (decision) => decision.factors)
  decision: DecisionEntity;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  type: FactorType;

  @Column()
  score: number;
}
