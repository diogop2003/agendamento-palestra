import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Palestrante } from './palestrante.entity';
import { CreatePalestranteDto } from '../dto/create-palestrante.dto';
import { UpdatePalestranteDto } from '../dto/update-palestrante.dto';

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

  async update(
    id: number,
    updatePalestranteDto: UpdatePalestranteDto,
  ): Promise<Palestrante> {
    const palestrante = await this.palestranteRepository.findOne({
      where: { id },
    });
    if (!palestrante) {
      throw new NotFoundException(`Tema com id ${id} não encontrado`);
    }
    Object.assign(palestrante, updatePalestranteDto);
    return this.palestranteRepository.save(palestrante);
  }
}
