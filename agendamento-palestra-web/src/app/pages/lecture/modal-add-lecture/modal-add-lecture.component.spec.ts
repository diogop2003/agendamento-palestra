import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddLectureComponent } from './modal-add-lecture.component';

describe('ModalAddLectureComponent', () => {
  let component: ModalAddLectureComponent;
  let fixture: ComponentFixture<ModalAddLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAddLectureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
