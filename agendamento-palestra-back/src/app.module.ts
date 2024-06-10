import { Module } from '@nestjs/common';
import { TemaController } from './tema/tema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './tema/infra/tema.entity';
import { TemaModule } from './tema/tema.module';
import { PalestranteController } from './palestrante/palestrante.controller';
import { Palestrante } from './palestrante/infra/palestrante.entity';
import { PalestranteModule } from './palestrante/palestrante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'diogo',
      password: 'diogo123',
      database: 'agendamento_palestra',
      entities: [Tema, Palestrante],
      synchronize: true,
    }),
    TemaModule,
    PalestranteModule,
  ],
  controllers: [TemaController, PalestranteController],
  providers: [],
})
export class AppModule {}
