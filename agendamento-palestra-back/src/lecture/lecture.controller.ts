import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  Get,
} from '@nestjs/common';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update.lecture.dto';
import { LectureService } from './lecture.service';

@Controller('lectures')
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}

  @Post()
  async createLecture(@Body() createLectureDto: CreateLectureDto) {
    return this.lectureService.create(createLectureDto);
  }

  @Put(':id')
  async updateLecture(
    @Param('id') id: number,
    @Body() updateLectureDto: UpdateLectureDto,
  ) {
    return this.lectureService.update(id, updateLectureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.lectureService.remove(id);
  }

  @Get(':id')
  async getLectureById(@Param('id') id: number): Promise<any> {
    return await this.lectureService.getById(id);
  }

  @Get()
  async getAllLectures(): Promise<any[]> {
    return await this.lectureService.getAll();
  }
}
