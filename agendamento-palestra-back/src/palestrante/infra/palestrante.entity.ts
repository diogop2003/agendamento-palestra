import { Palestra } from 'src/palestra/infra/palestra.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

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

  @OneToMany(() => Palestra, (palestra) => palestra.palestrante)
  palestras: Palestra[];
}
