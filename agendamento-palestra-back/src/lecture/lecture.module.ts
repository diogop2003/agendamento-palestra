import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theme } from 'src/theme/infra/theme.entity';
import { LectureController } from './lecture.controller';
import { LectureService } from './lecture.service';
import { Lecture } from './infra/lecture.entity';
import { Speaker } from 'src/speaker/infra/speaker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lecture, Speaker, Theme])],
  providers: [LectureService],
  controllers: [LectureController],
  exports: [LectureService],
})
export class LectureModule {}
