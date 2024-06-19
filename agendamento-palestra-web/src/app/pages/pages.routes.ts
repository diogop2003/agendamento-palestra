import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LectureComponent } from './lecture/lecture.component';
import { SpeakerComponent } from './speaker/speaker.component';

const routes: Routes = [
  { path: '', component: LectureComponent },
  { path: 'palestrante', component: SpeakerComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutesModule { }