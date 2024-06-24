import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LectureComponent } from './lecture/lecture.component';
import { PagesRoutesModule } from './pages.routes';
import { SpeakerComponent } from './speaker/speaker.component';
import { ThemeComponent } from './theme/theme.component';
import { ModalAddSpeakerComponent } from './speaker/modal-add-speaker/modal-add-speaker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalAddThemeComponent } from './theme/modal-add-theme/modal-add-theme.component';
import { ModalEditSpeakerComponent } from './speaker/modal-edit-speaker/modal-edit-speaker.component';



@NgModule({
  declarations: [
    LectureComponent,
    SpeakerComponent,
    ThemeComponent,
    ModalAddSpeakerComponent,
    ModalAddThemeComponent,
    ModalEditSpeakerComponent
  ],
  imports: [
    CommonModule,
    PagesRoutesModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
