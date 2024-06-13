import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CreateSpeakerDto } from './dto/create-speaker.dto';
import { SpeakerService } from './speaker.service';
import { UpdateSpeakerDto } from './dto/update-speaker.dto';

@Controller('speaker')
export class SpeakerController {
  constructor(private readonly speakerService: SpeakerService) {}

  @Post()
  async createSpeaker(@Body() createSpeakerDto: CreateSpeakerDto) {
    return this.speakerService.create(createSpeakerDto);
  }

  @Put(':id')
  async updateSpeaker(
    @Param('id') id: number,
    @Body() updateSpeakerDto: UpdateSpeakerDto,
  ) {
    return this.speakerService.update(id, updateSpeakerDto);
  }
}
