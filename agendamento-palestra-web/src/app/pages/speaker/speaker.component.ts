import { Component, OnInit } from '@angular/core';
import { SpeakersService } from '../../services/speaker/speakers.service';
import { Speaker } from '../../services/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddSpeakerComponent } from './modal-add-speaker/modal-add-speaker.component';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
  speakers: Speaker[] = [];

  constructor(private speakersService: SpeakersService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getSpeakers();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddSpeakerComponent, {});
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
