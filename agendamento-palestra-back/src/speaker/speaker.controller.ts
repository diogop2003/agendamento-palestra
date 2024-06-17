import { Controller, Post, Put, Body, Param } from '@nestjs/common';
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
}
