import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tema } from './tema.entity';
import { CreateTemaDto } from '../dto/create-tema.dto';
import { UpdateTemaDto } from '../dto/update-tema.dto';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private temasRepository: Repository<Tema>,
  ) {}

  async create(createTemaDto: CreateTemaDto): Promise<Tema> {
    const tema = this.temasRepository.create(createTemaDto);
    return this.temasRepository.save(tema);
  }

  async update(id: number, updateTemaDto: UpdateTemaDto): Promise<Tema> {
    const tema = await this.temasRepository.findOne({ where: { id } });
    if (!tema) {
      throw new NotFoundException(`Tema com id ${id} não encontrado`);
    }
    Object.assign(tema, updateTemaDto);
    return this.temasRepository.save(tema);
  }
}
