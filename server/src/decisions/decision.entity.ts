import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// const DECISION_STATUSES = [
//   'undecided',
//   'decidedFor',
//   'decidedAgainst',
// ] as const satisfies readonly DecisionStatus[];

@Entity('decisions')
export class DecisionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
