import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PalestraController } from './palestra.controller';
import { Palestra } from './infra/palestra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Palestra])],
  providers: [],
  controllers: [PalestraController],
  exports: [],
})
export class PalestraModule {}
