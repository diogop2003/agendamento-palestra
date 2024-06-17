import { Controller, Post, Put, Body, Param, Get } from '@nestjs/common';
import { CreateSpeakerDto } from './dto/create-speaker.dto';
import { UpdateSpeakerDto } from './dto/update-speaker.dto';
import { SpeakerService } from './speaker.service';

@Controller('speaker')
export class SpeakerController {
  constructor(private readonly speakerService: SpeakerService) {}

  @Post()
  async create(@Body() createSpeakerDto: CreateSpeakerDto) {
    return this.speakerService.create(createSpeakerDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSpeakerDto: UpdateSpeakerDto,
  ) {
    return this.speakerService.update(id, updateSpeakerDto);
  }

  @Get(':id')
  async getThemeById(@Param('id') id: number): Promise<any> {
    return await this.speakerService.getById(id);
  }

  @Get()
  async getAllThemes(): Promise<any[]> {
    return await this.speakerService.getAll();
  }
}
