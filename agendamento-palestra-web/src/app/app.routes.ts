import { Routes } from '@angular/router';
import { LectureComponent } from './pages/lecture/lecture.component';

export const routes: Routes = [
    { path: '', component: LectureComponent, pathMatch: 'full' },
    // {
    //      path: 'logged-area',
    //     loadChildren: () =>
    //     import('./logged-area/logged-area.module').then(m => m.LoggedAreaModule),
    // },
];
