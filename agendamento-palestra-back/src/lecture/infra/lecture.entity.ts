import { Speaker } from 'src/speaker/infra/speaker.entity';
import { Theme } from 'src/theme/infra/theme.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Lecture {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Speaker, (speaker) => speaker.lecture, {
    nullable: true,
  })
  speaker: Speaker;

  @ManyToOne(() => Theme, (theme) => theme.lectures, { nullable: true })
  theme: Theme;

  @Column()
  date: string;

  @Column()
  time: string;
}
