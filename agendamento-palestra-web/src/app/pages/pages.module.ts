import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LectureComponent } from './lecture/lecture.component';
import { PagesRoutesModule } from './pages.routes';



@NgModule({
  declarations: [
    LectureComponent
  ],
  imports: [
    CommonModule,
    PagesRoutesModule
  ]
})
export class PagesModule { }
