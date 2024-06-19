import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LectureComponent } from './lecture/lecture.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  { path: '', component: LectureComponent },
  { path: 'palestrante', component: SpeakerComponent },
  { path: 'temas', component: ThemeComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutesModule { }