import { Palestra } from 'src/palestra/infra/palestra.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

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

  @OneToMany(() => Palestra, (palestra) => palestra.tema)
  palestras: Palestra[];
}
