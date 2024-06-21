import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SpeakersService } from '../../../services/speaker/speakers.service';
import { Speaker } from '../../../services/interfaces';

@Component({
  selector: 'app-modal-add-speaker',
  templateUrl: './modal-add-speaker.component.html',
  styleUrls: ['./modal-add-speaker.component.css']
})
export class ModalAddSpeakerComponent {
  speakerForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModalAddSpeakerComponent>,
    private fb: FormBuilder,
    private speakersService: SpeakersService
  ) {
    this.speakerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]]
    });
  }

  onSubmit(): void {
    if (this.speakerForm.valid) {
      this.speakersService.addSpeaker(this.speakerForm.value).subscribe({
        next: (response: Speaker) => {
          console.log('Speaker added:', response);
          this.dialogRef.close('added');  // Indica que um speaker foi adicionado
        },
        error: (error) => {
          console.error('Error adding speaker:', error);
        }
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
