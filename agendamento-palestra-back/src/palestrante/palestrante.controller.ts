import { Controller, Post } from '@nestjs/common';

@Controller('palestrante')
export class PalestranteController {
  constructor(private readonly) {}

  @Post()
  async createPalestrante() {
    return 'criado';
  }
}
