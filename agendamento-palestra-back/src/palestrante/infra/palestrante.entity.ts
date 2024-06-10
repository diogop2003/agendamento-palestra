import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Palestrante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;
}
