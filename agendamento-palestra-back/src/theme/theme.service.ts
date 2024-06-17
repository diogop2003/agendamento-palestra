import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

@Injectable()
export class ThemeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createThemeDto: CreateThemeDto): Promise<any> {
    const query = `INSERT INTO tbl_theme (title, subject, summary) VALUES (?, ?, ?)`;
    const params = [
      createThemeDto.title,
      createThemeDto.subject,
      createThemeDto.summary,
    ];
    const result = await this.databaseService.query(query, params);
    return { id: result.insertId, ...createThemeDto };
  }

  async update(id: number, updateThemeDto: UpdateThemeDto): Promise<any> {
    const theme = await this.databaseService.query(
      `SELECT * FROM tbl_theme WHERE id = ?`,
      [id],
    );
    if (!theme.length) {
      throw new NotFoundException(`Theme with id ${id} not found`);
    }

    const query = `
      UPDATE tbl_theme
      SET title = COALESCE(?, title),
          subject = COALESCE(?, subject),
          summary = COALESCE(?, summary)
      WHERE id = ?
    `;
    const params = [
      updateThemeDto.title || theme[0].title,
      updateThemeDto.subject || theme[0].subject,
      updateThemeDto.summary || theme[0].summary,
      id,
    ];
    await this.databaseService.query(query, params);

    return { id, ...updateThemeDto };
  }
}
