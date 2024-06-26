import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditLectureComponent } from './modal-edit-lecture.component';

describe('ModalEditLectureComponent', () => {
  let component: ModalEditLectureComponent;
  let fixture: ComponentFixture<ModalEditLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEditLectureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
