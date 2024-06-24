import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';
import { Theme } from '../interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private readonly apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}`;
  }

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.apiUrl}/theme`);
  }

  addTheme(theme: Theme): Observable<Theme> {
    return this.http.post<Theme>(`${this.apiUrl}/theme`, theme);
  }

  editTheme(id: number, theme: Theme): Observable<Theme> {
    return this.http.put<Theme>(`${this.apiUrl}/theme/${id}`, theme);
  }

  getThemeById(id: number): Observable<Theme> {
    return this.http.get<Theme>(`${this.apiUrl}/theme/${id}`);
  }
}
