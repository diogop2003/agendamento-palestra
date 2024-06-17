import { Module } from '@nestjs/common';
import { ThemeController } from './theme.controller';
import { ThemeService } from './theme.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ThemeService],
  controllers: [ThemeController],
  exports: [ThemeService],
})
export class ThemeModule {}
