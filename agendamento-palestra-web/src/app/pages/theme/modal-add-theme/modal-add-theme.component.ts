import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Theme } from '../../../services/interfaces';
import { ThemesService } from '../../../services/theme/themes.service';
import { title } from 'process';

@Component({
  selector: 'app-modal-add-theme',
  templateUrl: './modal-add-theme.component.html',
  styleUrl: './modal-add-theme.component.css'
})
export class ModalAddThemeComponent {
  themeForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModalAddThemeComponent>,
    private fb: FormBuilder,
    private themesService: ThemesService
  ) {
    this.themeForm = this.fb.group({
      title: ['', Validators.required],
      subject: ['', [Validators.required]],
      summary: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.themeForm.valid) {
      this.themesService.addTheme(this.themeForm.value).subscribe({
        next: (response: Theme) => {
          console.log('theme added:', response);
          this.dialogRef.close('added');
        },
        error: (error) => {
          console.error('Error adding theme:', error);
        }
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

