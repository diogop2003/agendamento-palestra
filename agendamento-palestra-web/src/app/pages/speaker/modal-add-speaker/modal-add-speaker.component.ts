import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
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
      phone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/), this.phoneValidator]]
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
        this.speakerForm.controls['phone'].setValue(`(${match[1]}) ${match[2]}-${match[3]}`, { emitEvent: false });
      }
    } else {
      this.speakerForm.controls['phone'].setValue(value, { emitEvent: false });
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
    if (this.speakerForm.valid) {
      this.speakersService.addSpeaker(this.speakerForm.value).subscribe({
        next: (response: Speaker) => {
          console.log('Speaker added:', response);
          this.dialogRef.close('added');
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
