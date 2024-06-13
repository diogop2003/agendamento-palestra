import { Module } from '@nestjs/common';
import { SpeakerController } from './speaker.controller';
import { SpeakerService } from './speaker.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [SpeakerService],
  controllers: [SpeakerController],
  exports: [SpeakerService],
})
export class SpeakerModule {}
