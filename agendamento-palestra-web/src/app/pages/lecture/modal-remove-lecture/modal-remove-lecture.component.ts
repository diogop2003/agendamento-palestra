import { Component, Inject } from '@angular/core';
import { LecturesService } from '../../../services/lecture/lectures.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-remove-lecture',
  templateUrl: './modal-remove-lecture.component.html',
  styleUrls: ['./modal-remove-lecture.component.css']
})
export class ModalRemoveLectureComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalRemoveLectureComponent>,
    private lectureService: LecturesService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
  }

  removeLecture(): void {
    this.lectureService.deleteLecture(this.data.id).subscribe({
      next: () => {
        console.log('Palestra removida com sucesso');
        this.dialogRef.close('removed');
      },
      error: (error) => {
        console.error('Erro ao remover a palestra:', error);
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
