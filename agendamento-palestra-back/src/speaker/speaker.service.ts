import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateSpeakerDto } from './dto/create-speaker.dto';
import { UpdateSpeakerDto } from './dto/update-speaker.dto';

@Injectable()
export class SpeakerService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createSpeakerDto: CreateSpeakerDto): Promise<any> {
    const query =
      'INSERT INTO tbl_speaker (name, phone, email) VALUES (?, ?, ?)';
    const params = [
      createSpeakerDto.name,
      createSpeakerDto.phone,
      createSpeakerDto.email,
    ];
    const result = await this.databaseService.query(query, params);
    return { id: result.insertId, ...createSpeakerDto };
  }

  async update(id: number, updateSpeakerDto: UpdateSpeakerDto): Promise<any> {
    const [speaker] = await this.databaseService.query(
      'SELECT * FROM tbl_speaker WHERE id = ?',
      [id],
    );
    if (!speaker) {
      throw new NotFoundException(`Speaker with id ${id} not found`);
    }
    const query =
      'UPDATE tbl_speaker SET name = ?, phone = ?, email = ? WHERE id = ?';
    const params = [
      updateSpeakerDto.name || speaker.name,
      updateSpeakerDto.phone || speaker.phone,
      updateSpeakerDto.email || speaker.email,
      id,
    ];
    await this.databaseService.query(query, params);
    return { id, ...updateSpeakerDto };
  }

  async getById(id: number): Promise<any> {
    const speaker = await this.databaseService.query(
      `SELECT * FROM tbl_speaker WHERE id = ?`,
      [id],
    );
    if (!speaker.length) {
      throw new NotFoundException(`Speaker with id ${id} not found`);
    }
    return speaker[0];
  }

  async getAll(): Promise<any[]> {
    const speaker = await this.databaseService.query(
      `SELECT * FROM tbl_speaker`,
    );
    return speaker;
  }
}
