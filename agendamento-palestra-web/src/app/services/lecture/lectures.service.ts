import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment/enviroment';
import { Lecture, Speaker, Theme } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LecturesService {

  private readonly apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}`;
  }

  getLectures(): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(`${this.apiUrl}/lectures`);
  }

  getSpeaker(id: number): Observable<Speaker> {
    return this.http.get<Speaker>(`${this.apiUrl}/speaker/${id}`);
  }

  getTheme(id: number): Observable<Theme> {
    return this.http.get<Theme>(`${this.apiUrl}/theme/${id}`);
  }

  createLecture(lecture: any): Observable<any> {
    return this.http.post(this.apiUrl, lecture);
  }

  updateLecture(id: string, lecture: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, lecture);
  }

  deleteLecture(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}