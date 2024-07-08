import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LectureComponent } from './lecture/lecture.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { ThemeComponent } from './theme/theme.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: LectureComponent },
  { path: 'palestrante', component: SpeakerComponent },
  { path: 'temas', component: ThemeComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutesModule { }