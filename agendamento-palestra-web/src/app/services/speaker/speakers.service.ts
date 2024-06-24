import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';
import { Speaker } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  private readonly apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}`;
  }

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(`${this.apiUrl}/speaker`);
  }

  addSpeaker(speaker: Speaker): Observable<Speaker> {
    return this.http.post<Speaker>(`${this.apiUrl}/speaker`, speaker);
  }

  editSpeaker(id: number, speaker: Speaker): Observable<Speaker> {
    return this.http.put<Speaker>(`${this.apiUrl}/speaker/${id}`, speaker);
  }

  getSpeakerById(id: number): Observable<Speaker> {
    return this.http.get<Speaker>(`${this.apiUrl}/speaker/${id}`);
  }
}
