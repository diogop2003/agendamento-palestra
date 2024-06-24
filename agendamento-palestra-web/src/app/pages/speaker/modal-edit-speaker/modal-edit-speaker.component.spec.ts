import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditSpeakerComponent } from './modal-edit-speaker.component';

describe('ModalEditSpeakerComponent', () => {
  let component: ModalEditSpeakerComponent;
  let fixture: ComponentFixture<ModalEditSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEditSpeakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
