import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Theme } from 'src/theme/infra/theme.entity';
import { Lecture } from './infra/lecture.entity';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update.lecture.dto';
import { Speaker } from 'src/speaker/infra/speaker.entity';

@Injectable()
export class LectureService {
  constructor(
    @InjectRepository(Lecture)
    private readonly lectureRepository: Repository<Lecture>,
    @InjectRepository(Theme)
    private readonly themeRepository: Repository<Theme>,
    @InjectRepository(Speaker)
    private readonly speakerRepository: Repository<Speaker>,
  ) {}

  async create(createPalestraDto: CreateLectureDto): Promise<Lecture> {
    const { speaker_id, theme_id, date, time } = createPalestraDto;

    const theme = await this.themeRepository.findOne({
      where: { id: theme_id },
    });
    if (!theme) {
      throw new NotFoundException(`Theme with id ${theme_id} not found`);
    }

    const speaker = await this.speakerRepository.findOne({
      where: { id: speaker_id },
    });
    if (!speaker) {
      throw new NotFoundException(`Speaker with id ${speaker_id} nor found`);
    }

    const lecture = this.lectureRepository.create({
      theme,
      speaker,
      date,
      time,
    });

    return this.lectureRepository.save(lecture);
  }

  async update(
    id: number,
    updatePalestraDto: UpdateLectureDto,
  ): Promise<Lecture> {
    const lecture = await this.lectureRepository.findOne({ where: { id } });
    if (!lecture) {
      throw new NotFoundException(`Lecture with id ${id} not found`);
    }

    if (updatePalestraDto.theme_id) {
      const theme = await this.themeRepository.findOne({
        where: { id: updatePalestraDto.theme_id },
      });
      if (!theme) {
        throw new NotFoundException(
          `Theme with id ${updatePalestraDto.theme_id} not found`,
        );
      }
      lecture.theme = theme;
    }

    if (updatePalestraDto.speaker_id) {
      const speaker = await this.speakerRepository.findOne({
        where: { id: updatePalestraDto.speaker_id },
      });
      if (!speaker) {
        throw new NotFoundException(
          `Speaker with id ${updatePalestraDto.speaker_id} not found`,
        );
      }
      lecture.speaker = speaker;
    }

    Object.assign(lecture, updatePalestraDto);
    return this.lectureRepository.save(lecture);
  }

  async remove(id: number): Promise<void> {
    const result = await this.lectureRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Lecture with id ${id} not found`);
    }
  }
}
