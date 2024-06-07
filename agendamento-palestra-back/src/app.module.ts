import { Module } from '@nestjs/common';
import { TemaController } from './tema/tema.controller';

@Module({
  imports: [],
  controllers: [TemaController],
  providers: [],
})
export class AppModule {}
