import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  assunto: string;

  @Column()
  resumo: string;
}
