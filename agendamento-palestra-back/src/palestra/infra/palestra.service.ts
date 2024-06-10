import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePalestraDto } from '../dto/create-palestra.dto';
import { Palestra } from './palestra.entity';
import { UpdatePalestraDto } from '../dto/update-palestra.dto';

@Injectable()
export class PalestraService {
  constructor(
    @InjectRepository(Palestra)
    private palestraRepository: Repository<Palestra>,
  ) {}

  async create(CreatePalestraDto: CreatePalestraDto): Promise<Palestra> {
    const palestra = this.palestraRepository.create(CreatePalestraDto);
    return this.palestraRepository.save(palestra);
  }

  async update(
    id: number,
    updatePalestraDto: UpdatePalestraDto,
  ): Promise<Palestra> {
    const palestra = await this.palestraRepository.findOne({
      where: { id },
    });
    if (!palestra) {
      throw new NotFoundException(`Palestra com id ${id} não encontrado`);
    }
    Object.assign(palestra, updatePalestraDto);
    return this.palestraRepository.save(palestra);
  }

  async remove(id: number): Promise<void> {
    const result = await this.palestraRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Palestra com id ${id} não encontrada`);
    }
  }
}
