import { Module } from '@nestjs/common';
import { TemaController } from './tema/tema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './tema/infra/tema.entity';
import { TemaModule } from './tema/tema.module';
import { PalestranteController } from './palestrante/palestrante.controller';
import { Palestrante } from './palestrante/infra/palestrante.entity';
import { PalestranteModule } from './palestrante/palestrante.module';
import { PalestraModule } from './palestra/palestra.module';
import { PalestraController } from './palestra/palestra.controller';
import { Palestra } from './palestra/infra/palestra.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'diogo',
      password: 'diogo123',
      database: 'agendamento_palestra',
      entities: [Tema, Palestrante, Palestra],
      synchronize: true,
    }),
    TemaModule,
    PalestranteModule,
    PalestraModule,
  ],
  controllers: [TemaController, PalestranteController, PalestraController],
  providers: [],
})
export class AppModule {}
