import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PalestraController } from './palestra.controller';
import { Palestra } from './infra/palestra.entity';
import { PalestraService } from './infra/palestra.service';

@Module({
  imports: [TypeOrmModule.forFeature([Palestra])],
  providers: [PalestraService],
  controllers: [PalestraController],
  exports: [PalestraService],
})
export class PalestraModule {}
