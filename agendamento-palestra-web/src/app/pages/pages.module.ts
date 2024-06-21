import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LectureComponent } from './lecture/lecture.component';
import { PagesRoutesModule } from './pages.routes';
import { SpeakerComponent } from './speaker/speaker.component';
import { ThemeComponent } from './theme/theme.component';
import { ModalAddSpeakerComponent } from './speaker/modal-add-speaker/modal-add-speaker.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LectureComponent,
    SpeakerComponent,
    ThemeComponent,
    ModalAddSpeakerComponent
  ],
  imports: [
    CommonModule,
    PagesRoutesModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
