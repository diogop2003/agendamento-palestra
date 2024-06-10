import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { PalestraService } from './infra/palestra.service';
import { CreatePalestraDto } from './dto/create-palestra.dto';
import { UpdatePalestraDto } from './dto/update-palestra.dto';

@Controller('palestras')
export class PalestraController {
  constructor(private readonly palestraService: PalestraService) {}

  @Post()
  async createPalestrante(@Body() createPalestraDto: CreatePalestraDto) {
    return this.palestraService.create(createPalestraDto);
  }

  @Put(':id')
  async updatePalestrante(
    @Param('id') id: number,
    @Body() updatePalestraDto: UpdatePalestraDto,
  ) {
    return this.palestraService.update(id, updatePalestraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.palestraService.remove(id);
  }
}
