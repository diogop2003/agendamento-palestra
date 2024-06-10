import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Palestra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  palestrante_id: number;

  @Column()
  tema_id: number;

  @Column()
  data: string;

  @Column()
  hora: string;
}
