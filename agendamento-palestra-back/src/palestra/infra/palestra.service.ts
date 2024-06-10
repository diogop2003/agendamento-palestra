import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePalestraDto } from '../dto/create-palestra.dto';
import { Palestra } from './palestra.entity';
import { UpdatePalestraDto } from '../dto/update-palestra.dto';
import { Tema } from 'src/tema/infra/tema.entity';
import { Palestrante } from 'src/palestrante/infra/palestrante.entity';

@Injectable()
export class PalestraService {
  constructor(
    @InjectRepository(Palestra)
    private readonly palestraRepository: Repository<Palestra>,
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
    @InjectRepository(Palestrante)
    private readonly palestranteRepository: Repository<Palestrante>,
  ) {}

  async create(createPalestraDto: CreatePalestraDto): Promise<Palestra> {
    const { palestrante_id, tema_id, data, hora } = createPalestraDto;

    const tema = await this.temaRepository.findOne({ where: { id: tema_id } });
    if (!tema) {
      throw new NotFoundException(`Tema com id ${tema_id} não encontrado`);
    }

    const palestrante = await this.palestranteRepository.findOne({
      where: { id: palestrante_id },
    });
    if (!palestrante) {
      throw new NotFoundException(
        `Palestrante com id ${palestrante_id} não encontrado`,
      );
    }

    const palestra = this.palestraRepository.create({
      tema,
      palestrante,
      data,
      hora,
    });

    return this.palestraRepository.save(palestra);
  }

  async update(
    id: number,
    updatePalestraDto: UpdatePalestraDto,
  ): Promise<Palestra> {
    const palestra = await this.palestraRepository.findOne({ where: { id } });
    if (!palestra) {
      throw new NotFoundException(`Palestra com id ${id} não encontrado`);
    }

    if (updatePalestraDto.tema_id) {
      const tema = await this.temaRepository.findOne({
        where: { id: updatePalestraDto.tema_id },
      });
      if (!tema) {
        throw new NotFoundException(
          `Tema com id ${updatePalestraDto.tema_id} não encontrado`,
        );
      }
      palestra.tema = tema;
    }

    if (updatePalestraDto.palestrante_id) {
      const palestrante = await this.palestranteRepository.findOne({
        where: { id: updatePalestraDto.palestrante_id },
      });
      if (!palestrante) {
        throw new NotFoundException(
          `Palestrante com id ${updatePalestraDto.palestrante_id} não encontrado`,
        );
      }
      palestra.palestrante = palestrante;
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
