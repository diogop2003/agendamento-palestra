import { Module } from '@nestjs/common';
import { SpeakerController } from './speaker.controller';
import { SpeakerService } from './speaker.service';

@Module({
  providers: [SpeakerService],
  controllers: [SpeakerController],
  exports: [SpeakerService],
})
export class SpeakerModule {}
