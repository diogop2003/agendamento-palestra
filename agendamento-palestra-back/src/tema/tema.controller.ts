import { Controller, Post, Put, Body, Param } from '@nestjs/common';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
import { TemaService } from './infra/tema.service';

@Controller('temas')
export class TemaController {
  constructor(private readonly temaService: TemaService) {}

  @Post()
  create(@Body() createTemaDto: CreateTemaDto) {
    return this.temaService.create(createTemaDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTemaDto: UpdateTemaDto) {
    return this.temaService.update(id, updateTemaDto);
  }
}
