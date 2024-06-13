import { Lecture } from 'src/lecture/infra/lecture.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Theme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subject: string;

  @Column()
  summary: string;

  @OneToMany(() => Lecture, (lectures) => lectures.theme)
  lectures: Lecture[];
}
