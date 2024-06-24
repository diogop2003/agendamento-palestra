import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Theme } from '../../../services/interfaces';
import { ThemesService } from '../../../services/theme/themes.service';
import { title } from 'process';

@Component({
  selector: 'app-modal-edit-theme',
  templateUrl: './modal-edit-theme.component.html',
  styleUrl: './modal-edit-theme.component.css'
})
export class ModalEditThemeComponent {
  editThemeForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModalEditThemeComponent>,
    private fb: FormBuilder,
    private themeService: ThemesService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
    this.editThemeForm = this.fb.group({
      title: ['', Validators.required],
      subject: ['', Validators.required],
      summary: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.themeService.getThemeById(this.data.id).subscribe({
      next: (theme: Theme) => {
        this.editThemeForm.patchValue(theme);
        console.log('theme data loaded into form:', this.editThemeForm.value);
      },
      error: (error) => {
        console.error('Error fetching theme:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.editThemeForm.valid) {
      const themeId = this.data.id;
      this.themeService.editTheme(themeId, this.editThemeForm.value).subscribe({
        next: (response: Theme) => {
          console.log('theme edit:', response);
          this.dialogRef.close('edit');
        },
        error: (error) => {
          console.error('Error edit theme:', error);
        }
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
