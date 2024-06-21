import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-speaker',
  templateUrl: './modal-add-speaker.component.html',
  styleUrl: './modal-add-speaker.component.css'
})
export class ModalAddSpeakerComponent {

  constructor(public dialogRef: MatDialogRef<ModalAddSpeakerComponent>) {}

  closeDialog(): void {
    this.dialogRef.close()
  }

  saveForm(): void {
    
  }
}
