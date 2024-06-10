import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { PalestranteService } from './infra/palestrante.service';
import { CreatePalestranteDto } from './dto/create-palestrante.dto';
import { UpdatePalestranteDto } from './dto/update-palestrante.dto';

@Controller('palestrante')
export class PalestranteController {
  constructor(private readonly palestranteService: PalestranteService) {}

  @Post()
  async createPalestrante(@Body() createPalestranteDto: CreatePalestranteDto) {
    return this.palestranteService.create(createPalestranteDto);
  }

  @Put(':id')
  async updatePalestrante(
    @Param('id') id: number,
    @Body() updatePalestranteDto: UpdatePalestranteDto,
  ) {
    return this.palestranteService.update(id, updatePalestranteDto);
  }
}
