import { Controller, Post, Put, Body, Param, Get } from '@nestjs/common';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { ThemeService } from './theme.service';

@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Post()
  create(@Body() createThemeDto: CreateThemeDto) {
    return this.themeService.create(createThemeDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateThemeDto: UpdateThemeDto) {
    return this.themeService.update(id, updateThemeDto);
  }

  @Get(':id')
  async getThemeById(@Param('id') id: number): Promise<any> {
    return await this.themeService.getById(id);
  }

  @Get()
  async getAllThemes(): Promise<any[]> {
    return await this.themeService.getAll();
  }
}
