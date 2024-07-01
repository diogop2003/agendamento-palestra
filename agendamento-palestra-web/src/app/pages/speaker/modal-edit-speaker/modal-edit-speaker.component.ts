import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpeakersService } from '../../../services/speaker/speakers.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Speaker } from '../../../services/interfaces';

@Component({
  selector: 'app-modal-edit-speaker',
  templateUrl: './modal-edit-speaker.component.html',
  styleUrls: ['./modal-edit-speaker.component.css']
})
export class ModalEditSpeakerComponent implements OnInit {
  editSpeakerForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModalEditSpeakerComponent>,
    private fb: FormBuilder,
    private speakersService: SpeakersService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
    this.editSpeakerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]]
    });
  }

  ngOnInit(): void {
    this.speakersService.getSpeakerById(this.data.id).subscribe({
      next: (speaker: Speaker) => {
        this.editSpeakerForm.patchValue(speaker);
        console.log('Speaker data loaded into form:', this.editSpeakerForm.value);
      },
      error: (error) => {
        console.error('Error fetching speaker:', error);
      }
    });
  }

  onPhoneNumberChange(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Remove todos os caracteres que não são dígitos
    let cleaned = ('' + value).replace(/\D/g, '');

    // Limite o número a 11 dígitos
    if (cleaned.length > 11) {
      cleaned = cleaned.slice(0, 11);
    }

    // Formate o número se ele tiver 11 dígitos
    if (cleaned.length === 11) {
      let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
      if (match) {
        this.editSpeakerForm.controls['phone'].setValue(`(${match[1]}) ${match[2]}-${match[3]}`, { emitEvent: false });
      }
    } else {
      this.editSpeakerForm.controls['phone'].setValue(value, { emitEvent: false });
    }
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '-'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  phoneValidator(control: AbstractControl) {
    const phone = control.value;
    const digits = phone.replace(/\D/g, '');
    if (digits.length !== 11) {
      return { invalidPhoneLength: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.editSpeakerForm.valid) {
      const speakerId = this.data.id;
      this.speakersService.editSpeaker(speakerId, this.editSpeakerForm.value).subscribe({
        next: (response: Speaker) => {
          console.log('Speaker edit:', response);
          this.dialogRef.close('edit');
        },
        error: (error) => {
          console.error('Error edit speaker:', error);
        }
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}