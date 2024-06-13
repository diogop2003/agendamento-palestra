import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

@Injectable()
export class ThemeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createThemeDto: CreateThemeDto): Promise<any> {
    const query = `INSERT INTO theme (title, subject, summary) VALUES (?, ?, ?)`;
    const params = [
      createThemeDto.title,
      createThemeDto.subject,
      createThemeDto.summary,
    ];
    const result = await this.databaseService.query(query, params);
    return { id: result.insertId, ...createThemeDto };
  }

  async update(id: number, updateThemeDto: UpdateThemeDto): Promise<any> {
    const [theme] = await this.databaseService.query(
      `SELECT * FROM theme WHERE id = ?`,
      [id],
    );
    if (!theme) {
      throw new NotFoundException(`Theme with id ${id} not found`);
    }
    const query = `UPDATE theme SET title = ?, subject = ?, summary = ? WHERE id = ?`;
    const params = [
      updateThemeDto.title || theme.title,
      updateThemeDto.subject || theme.subject,
      updateThemeDto.summary || theme.summary,
      id,
    ];
    await this.databaseService.query(query, params);
    return { id, ...updateThemeDto };
  }
}
