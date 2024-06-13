import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Speaker } from './infra/speaker.entity';
import { UpdateSpeakerDto } from './dto/update-speaker.dto';
import { CreateSpeakerDto } from './dto/create-speaker.dto';

@Injectable()
export class SpeakerService {
  constructor(
    @InjectRepository(Speaker)
    private speakerRepository: Repository<Speaker>,
  ) {}

  async create(createSpeakerDto: CreateSpeakerDto): Promise<Speaker> {
    const speaker = this.speakerRepository.create(createSpeakerDto);
    return this.speakerRepository.save(speaker);
  }

  async update(
    id: number,
    updateSpeakerDto: UpdateSpeakerDto,
  ): Promise<Speaker> {
    const speaker = await this.speakerRepository.findOne({
      where: { id },
    });
    if (!speaker) {
      throw new NotFoundException(`Theme with id ${id} not found`);
    }
    Object.assign(speaker, updateSpeakerDto);
    return this.speakerRepository.save(speaker);
  }
}
