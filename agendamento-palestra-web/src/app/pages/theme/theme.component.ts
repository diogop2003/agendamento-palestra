import { Component } from '@angular/core';
import { Theme } from '../../services/interfaces';
import { ThemesService } from '../../services/theme/themes.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {
  themes: Theme[] = [];

  constructor(private themeService: ThemesService) {}

  ngOnInit(): void {
    this.getThemes();
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
