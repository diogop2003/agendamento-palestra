import { Palestrante } from 'src/palestrante/infra/palestrante.entity';
import { Tema } from 'src/tema/infra/tema.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Palestra {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Palestrante, (palestrante) => palestrante.palestras, {
    nullable: true,
  })
  palestrante: Palestrante;

  @ManyToOne(() => Tema, (tema) => tema.palestras, { nullable: true })
  tema: Tema;

  @Column()
  data: string;

  @Column()
  hora: string;
}
