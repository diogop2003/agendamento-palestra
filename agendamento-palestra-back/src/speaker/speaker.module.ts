import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpeakerController } from './speaker.controller';
import { SpeakerService } from './speaker.service';
import { Speaker } from './infra/speaker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Speaker])],
  providers: [SpeakerService],
  controllers: [SpeakerController],
  exports: [SpeakerService],
})
export class SpeakerModule {}
