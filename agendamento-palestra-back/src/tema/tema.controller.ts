import { Controller, Post } from '@nestjs/common';

@Controller('/temas')
export class TemaController {
  @Post()
  async criarTema() {
    return 'tema criado';
  }
}
