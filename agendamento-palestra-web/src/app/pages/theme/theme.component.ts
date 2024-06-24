import { Component } from '@angular/core';
import { Theme } from '../../services/interfaces';
import { ThemesService } from '../../services/theme/themes.service';
import { ModalAddThemeComponent } from './modal-add-theme/modal-add-theme.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditThemeComponent } from './modal-edit-theme/modal-edit-theme.component';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {
  themes: Theme[] = [];

  constructor(private themeService: ThemesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getThemes();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddThemeComponent, {
      disableClose: true,
      panelClass: 'tailwind-modal-panel',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'added') {
        this.getThemes();
      }
    });
  }

  openEditDialog(themeId: number): void {
    const dialogRef = this.dialog.open(ModalEditThemeComponent, {
      data: { id: themeId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'edit') {
        this.getThemes();
      }
    });
  }

  getThemes(): void {
    this.themeService.getThemes().subscribe({
      next: (data: Theme[]) => {
        this.themes = data;
      },
      error: (error) => {
        console.error('Error fetching themes:', error);
      },
      complete: () => {
        console.log('themes fetching completed.');
      }
    });
  }
}
