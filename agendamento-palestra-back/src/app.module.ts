import { Module } from '@nestjs/common';
import { LectureModule } from './lecture/lecture.module';
import { ThemeModule } from './theme/theme.module';
import { SpeakerModule } from './speaker/speaker.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    LectureModule,
    ThemeModule,
    SpeakerModule,
  ],
})
export class AppModule {}
