import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddSpeakerComponent } from './modal-add-speaker.component';

describe('ModalAddSpeakerComponent', () => {
  let component: ModalAddSpeakerComponent;
  let fixture: ComponentFixture<ModalAddSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAddSpeakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
