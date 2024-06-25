import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Lecture, Speaker, Theme } from '../../../services/interfaces';
import { SpeakersService } from '../../../services/speaker/speakers.service';
import { ThemesService } from '../../../services/theme/themes.service';
import { LecturesService } from '../../../services/lecture/lectures.service';

@Component({
  selector: 'app-modal-add-lecture',
  templateUrl: './modal-add-lecture.component.html',
  styleUrl: './modal-add-lecture.component.css'
})
export class ModalAddLectureComponent {
  lectureForm: FormGroup;
  speakers: Speaker[] = [];
  themes: Theme[] = [];

  constructor(
    private dialogRef: MatDialogRef<ModalAddLectureComponent>,
    private fb: FormBuilder,
    private speakersService: SpeakersService,
    private themesService: ThemesService,
    private lectureService: LecturesService
  ) {
    this.lectureForm = this.fb.group({
      time: ['', Validators.required],
      date: ['', Validators.required],
      speaker: ['', Validators.required],
      theme: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadSpeakers();
    this.loadThemes();
  }

  private loadSpeakers(): void {
    this.speakersService.getSpeakers().subscribe({
      next: (speakers: Speaker[]) => {
        this.speakers = speakers;
      },
      error: (error) => {
        console.error('Erro ao carregar os palestrantes:', error);
      }
    });
  }

  private loadThemes(): void {
    this.themesService.getThemes().subscribe({
      next: (themes: Theme[]) => {
        this.themes = themes;
      },
      error: (error) => {
        console.error('Erro ao carregar os palestrantes:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.lectureForm.valid) {
      const formValue = this.lectureForm.value;
      const payload = {
        ...formValue,
        speaker_id: Number(formValue.speaker),
        theme_id: Number(formValue.theme),
        date: formValue.date,
        time: formValue.time
      };

      this.lectureService.createLecture(payload).subscribe({
        next: (response) => {
          console.log('Palestra criada com sucesso:', response);
          this.dialogRef.close('added');
        },
        error: (error) => {
          console.error('Erro ao criar a palestra:', error);
        }
      });
    }
  }


  closeDialog(): void {
    this.dialogRef.close();
  }
}
