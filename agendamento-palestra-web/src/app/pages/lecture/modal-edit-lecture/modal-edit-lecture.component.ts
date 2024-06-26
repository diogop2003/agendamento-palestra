import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SpeakersService } from '../../../services/speaker/speakers.service';
import { ThemesService } from '../../../services/theme/themes.service';
import { LecturesService } from '../../../services/lecture/lectures.service';
import { Speaker, Theme } from '../../../services/interfaces';

@Component({
  selector: 'app-modal-edit-lecture',
  templateUrl: './modal-edit-lecture.component.html',
  styleUrls: ['./modal-edit-lecture.component.css']
})
export class ModalEditLectureComponent implements OnInit {
  editLectureForm: FormGroup;
  speakers: Speaker[] = [];
  themes: Theme[] = [];

  constructor(
    private dialogRef: MatDialogRef<ModalEditLectureComponent>,
    private fb: FormBuilder,
    private speakersService: SpeakersService,
    private themesService: ThemesService,
    private lectureService: LecturesService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
    this.editLectureForm = this.fb.group({
      time: ['', Validators.required],
      date: ['', Validators.required],
      speaker: ['', Validators.required],
      theme: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadSpeakers();
    this.loadThemes();
    this.loadLectureData();
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
        console.error('Erro ao carregar os temas:', error);
      }
    });
  }

  private loadLectureData(): void {
    const lectureId = this.data.id;
    this.lectureService.getLectureById(lectureId).subscribe({
      next: (lecture) => {
        const date = new Date(lecture.date).toISOString().split('T')[0];
        
        this.editLectureForm.patchValue({
          time: lecture.time,
          date: date,
          speaker: lecture.speaker_id,
          theme: lecture.theme_id
        });
      },
      error: (error) => {
        console.error('Erro ao carregar os dados da palestra:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.editLectureForm.valid) {
      const formValue = this.editLectureForm.value;
      const payload = {
        ...formValue,
        speaker_id: Number(formValue.speaker),
        theme_id: Number(formValue.theme),
        date: formValue.date,
        time: formValue.time
      };

      const lectureId = this.data.id;

      this.lectureService.updateLecture(lectureId, payload).subscribe({
        next: (response) => {
          console.log('Palestra atualizada com sucesso:', response);
          this.dialogRef.close('updated');
        },
        error: (error) => {
          console.error('Erro ao atualizar a palestra:', error);
        }
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
