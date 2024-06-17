import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update.lecture.dto';

@Injectable()
export class LectureService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createLectureDto: CreateLectureDto): Promise<any> {
    const { speaker_id, theme_id, date, time } = createLectureDto;

    const theme = await this.databaseService.query(
      `SELECT * FROM tbl_theme WHERE id = ?`,
      [theme_id],
    );
    if (theme.length === 0) {
      throw new NotFoundException(`Theme with id ${theme_id} not found`);
    }

    const speaker = await this.databaseService.query(
      `SELECT * FROM tbl_speaker WHERE id = ?`,
      [speaker_id],
    );
    if (speaker.length === 0) {
      throw new NotFoundException(`Speaker with id ${speaker_id} not found`);
    }

    const query = `
      INSERT INTO tbl_lecture (theme_id, speaker_id, date, time)
      VALUES (?, ?, ?, ?)
    `;
    const params = [theme_id, speaker_id, date, time];
    const result = await this.databaseService.query(query, params);

    return { id: result.insertId, ...createLectureDto };
  }

  async update(id: number, updateLectureDto: UpdateLectureDto): Promise<any> {
    const lecture = await this.databaseService.query(
      `SELECT * FROM tbl_lecture WHERE id = ?`,
      [id],
    );
    if (lecture.length === 0) {
      throw new NotFoundException(`Lecture with id ${id} not found`);
    }

    const query = `
      UPDATE tbl_lecture
      SET theme_id = COALESCE(?, theme_id),
          speaker_id = COALESCE(?, speaker_id),
          date = COALESCE(?, date),
          time = COALESCE(?, time)
      WHERE id = ?
    `;
    const params = [
      updateLectureDto.theme_id || lecture[0].theme_id,
      updateLectureDto.speaker_id || lecture[0].speaker_id,
      updateLectureDto.date || lecture[0].date,
      updateLectureDto.time || lecture[0].time,
      id,
    ];
    await this.databaseService.query(query, params);

    return { id, ...updateLectureDto };
  }

  async remove(id: number): Promise<void> {
    const result = await this.databaseService.query(
      `DELETE FROM tbl_lecture WHERE id = ?`,
      [id],
    );
    if (result.affectedRows === 0) {
      throw new NotFoundException(`Lecture with id ${id} not found`);
    }
  }
}
