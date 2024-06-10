import { Module } from '@nestjs/common';
import { TemaController } from './tema/tema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './tema/infra/tema.entity';
import { TemaModule } from './tema/tema.module';
import { PalestranteController } from './palestrante/palestrante.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'diogo',
      password: 'diogo123',
      database: 'agendamento_palestra',
      entities: [Tema],
      synchronize: true,
    }),
    TemaModule,
  ],
  controllers: [TemaController, PalestranteController],
  providers: [],
})
export class AppModule {}
