import { Component, OnInit } from '@angular/core';
import { LecturesService } from '../../services/lecture/lectures.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lecture, Speaker, Theme } from '../../services/interfaces';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {
  
  lectures: Lecture[] = [];

  constructor(private lecturesService: LecturesService) {}

  ngOnInit(): void {
    this.loadLectures();
  }

  loadLectures() {
    this.lecturesService.getLectures().subscribe(
      (lectures: Lecture[]) => {
        const observables = lectures.map((lecture: Lecture) => {
          return forkJoin({
            speaker: this.lecturesService.getSpeaker(lecture.speaker_id),
            theme: this.lecturesService.getTheme(lecture.theme_id)
          }).pipe(
            map((result: { speaker: Speaker; theme: Theme }) => ({
              ...lecture,
              speaker: result.speaker.name,
              theme: result.theme.title
            }))
          );
        });

        forkJoin(observables).subscribe(
          (lecturesWithDetails: Lecture[]) => {
            this.lectures = lecturesWithDetails;
          },
          (error) => {
            console.error('Erro ao carregar os detalhes das palestras:', error);
          }
        );
      },
      (error) => {
        console.error('Erro ao carregar as palestras:', error);
      }
    );
  }
}
