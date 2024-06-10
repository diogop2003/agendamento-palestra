import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PalestranteController } from './palestrante.controller';
import { Palestrante } from './infra/palestrante.entity';
import { PalestranteService } from './infra/palestrante.service';

@Module({
  imports: [TypeOrmModule.forFeature([Palestrante])],
  providers: [PalestranteService],
  controllers: [PalestranteController],
  exports: [PalestranteService],
})
export class PalestranteModule {}
