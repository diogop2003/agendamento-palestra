import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LectureComponent } from './lecture/lecture.component';
import { PagesRoutesModule } from './pages.routes';
import { SpeakerComponent } from './speaker/speaker.component';
import { ThemeComponent } from './theme/theme.component';



@NgModule({
  declarations: [
    LectureComponent,
    SpeakerComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutesModule
  ]
})
export class PagesModule { }
