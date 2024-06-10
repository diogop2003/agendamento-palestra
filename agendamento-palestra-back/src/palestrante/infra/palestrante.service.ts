import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Palestrante } from './palestrante.entity';
import { CreatePalestranteDto } from '../dto/create-palestrante.dto';

@Injectable()
export class PalestranteService {
  constructor(
    @InjectRepository(Palestrante)
    private palestranteRepository: Repository<Palestrante>,
  ) {}

  async create(
    CreatePalestranteDto: CreatePalestranteDto,
  ): Promise<Palestrante> {
    const palestrante = this.palestranteRepository.create(CreatePalestranteDto);
    return this.palestranteRepository.save(palestrante);
  }
}
