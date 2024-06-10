import { Body, Controller, Post } from '@nestjs/common';
import { PalestranteService } from './infra/palestrante.service';
import { CreatePalestranteDto } from './dto/create-palestrante.dto';

@Controller('palestrante')
export class PalestranteController {
  constructor(private readonly palestranteService: PalestranteService) {}

  @Post()
  async createPalestrante(@Body() createPalestranteDto: CreatePalestranteDto) {
    return this.palestranteService.create(createPalestranteDto);
  }
}
