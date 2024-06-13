import { Lecture } from 'src/lecture/infra/lecture.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Speaker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToMany(() => Lecture, (lecture) => lecture.speaker)
  lecture: Lecture[];
}
