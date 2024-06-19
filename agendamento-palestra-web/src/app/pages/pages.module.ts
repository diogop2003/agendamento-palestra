import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LectureComponent } from './lecture/lecture.component';
import { PagesRoutesModule } from './pages.routes';
import { SpeakerComponent } from './speaker/speaker.component';



@NgModule({
  declarations: [
    LectureComponent,
    SpeakerComponent
  ],
  imports: [
    CommonModule,
    PagesRoutesModule
  ]
})
export class PagesModule { }
