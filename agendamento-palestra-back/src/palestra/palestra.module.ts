import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PalestraController } from './palestra.controller';
import { Palestra } from './infra/palestra.entity';
import { PalestraService } from './infra/palestra.service';
import { Palestrante } from 'src/palestrante/infra/palestrante.entity';
import { Tema } from 'src/tema/infra/tema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Palestra, Palestrante, Tema])],
  providers: [PalestraService],
  controllers: [PalestraController],
  exports: [PalestraService],
})
export class PalestraModule {}
