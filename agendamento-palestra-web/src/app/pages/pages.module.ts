import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutesModule } from './pages.routes';

// Componentes
import { LectureComponent } from './lecture/lecture.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { ThemeComponent } from './theme/theme.component';
import { ModalAddSpeakerComponent } from './speaker/modal-add-speaker/modal-add-speaker.component';
import { ModalAddThemeComponent } from './theme/modal-add-theme/modal-add-theme.component';
import { ModalEditSpeakerComponent } from './speaker/modal-edit-speaker/modal-edit-speaker.component';
import { ModalEditThemeComponent } from './theme/modal-edit-theme/modal-edit-theme.component';
import { ModalAddLectureComponent } from './lecture/modal-add-lecture/modal-add-lecture.component';
import { ModalEditLectureComponent } from './lecture/modal-edit-lecture/modal-edit-lecture.component';
import { ModalRemoveLectureComponent } from './lecture/modal-remove-lecture/modal-remove-lecture.component';
import { ErrorComponent } from './error/error.component';

// Diretiva
import { CloseButtonDirective } from '../directive/close-button.directive';
import { SaveButtonDirective } from '../directive/save-button.directive';

@NgModule({
  declarations: [
    LectureComponent,
    SpeakerComponent,
    ThemeComponent,
    ModalAddSpeakerComponent,
    ModalAddThemeComponent,
    ModalEditSpeakerComponent,
    ModalEditThemeComponent,
    ModalAddLectureComponent,
    ModalEditLectureComponent,
    ModalRemoveLectureComponent,
    ErrorComponent,
    CloseButtonDirective,
    SaveButtonDirective,
  ],
  imports: [
    CommonModule,
    PagesRoutesModule,
    ReactiveFormsModule
  ],
  exports: [
    CloseButtonDirective,
    SaveButtonDirective,
  ]
})
export class PagesModule { }
