import { Component, OnInit } from '@angular/core';
import { LecturesService } from '../../services/lecture/lectures.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lecture, Speaker, Theme } from '../../services/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddLectureComponent } from './modal-add-lecture/modal-add-lecture.component';
import { ModalEditLectureComponent } from './modal-edit-lecture/modal-edit-lecture.component';
import { ModalRemoveLectureComponent } from './modal-remove-lecture/modal-remove-lecture.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {
  
  lectures: Lecture[] = [];

  constructor(
    private lecturesService: LecturesService,
    public dialog: MatDialog,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadLectures();
  }

  loadLectures() {
    this.lecturesService.getLectures().subscribe({
      next: (lectures: Lecture[]) => {
        const observables = lectures.map((lecture: Lecture) => {
          return forkJoin({
            speaker: this.lecturesService.getSpeaker(lecture.speaker_id),
            theme: this.lecturesService.getTheme(lecture.theme_id)
          }).pipe(
            map((result: { speaker: Speaker; theme: Theme }) => ({
              ...lecture,
              speaker: result.speaker.name,
              theme: result.theme.title,
              date: this.formatDate(lecture.date),
              time: this.formatTime(lecture.time ?? '')
            }))
          );
        });
  
        forkJoin(observables).subscribe({
          next: (lecturesWithDetails: Lecture[]) => {
            this.lectures = lecturesWithDetails;
          },
          error: (error) => {
            console.error('Erro ao carregar os detalhes das palestras:', error);
          }
        });
      },
      error: (error) => {
        console.error('Erro ao carregar as palestras:', error);
      }
    });
  }

  convertTimeToDate(time: string): Date {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, seconds, 0);
    return date;
  }

  formatTime(time: string | null): string {
    if (!time) {
      return '';
    }
    const date = this.convertTimeToDate(time);
    return this.datePipe.transform(date, 'HH:mm') ?? '';
  }

  formatDate(date: string | null): string {
    if (!date) {
      return '';
    }
    return this.datePipe.transform(date, 'dd/MM/yyyy') ?? '';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddLectureComponent, {
      disableClose: true,
      panelClass: 'tailwind-modal-panel',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'added') {
        this.loadLectures();
      }
    });
  }

  openEditDialog(lectureId: number): void {
    const dialogRef = this.dialog.open(ModalEditLectureComponent, {
      data: { id: lectureId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'updated') {
        this.loadLectures();
      }
    });
  }

  openRemoveDialog(lectureId: number): void {
    const dialogRef = this.dialog.open(ModalRemoveLectureComponent, {
      data: { id: lectureId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'removed') {
        this.loadLectures();
      }
    });
  }
}
