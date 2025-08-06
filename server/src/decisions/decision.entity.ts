import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('decisions')
export class DecisionEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: DecisionStatus;

  @Column()
  score: number;
}
