import { Component, OnInit } from '@angular/core';
import { SpeakersService } from '../../services/speaker/speakers.service';
import { Speaker } from '../../services/interfaces';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
  speakers: Speaker[] = [];

  constructor(private speakersService: SpeakersService) {}

  ngOnInit(): void {
    this.getSpeakers();
  }

  getSpeakers(): void {
    this.speakersService.getSpeakers().subscribe({
      next: (data: Speaker[]) => {
        this.speakers = data;
      },
      error: (error) => {
        console.error('Error fetching speakers:', error);
      },
      complete: () => {
        console.log('Speakers fetching completed.');
      }
    });
  }
}
