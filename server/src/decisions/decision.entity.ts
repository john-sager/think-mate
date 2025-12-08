import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FactorEntity } from '../factors/factors.entity';

// const DECISION_STATUSES = [
//   'undecided',
//   'decidedFor',
//   'decidedAgainst',
// ] as const satisfies readonly DecisionStatus[];

@Entity('decisions')
export class DecisionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => FactorEntity, (factor) => factor.decision)
  factors: Factor[];

  @Column()
  title: string;

  @Column()
  description: string;

  @Column(/*{
    type: 'enum',
    enum: DECISION_STATUSES,
    default: 'undecided',
  }*/)
  status: DecisionStatus;

  @Column()
  score: number;
}
