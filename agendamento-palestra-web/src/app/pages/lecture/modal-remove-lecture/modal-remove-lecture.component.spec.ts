import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoveLectureComponent } from './modal-remove-lecture.component';

describe('ModalRemoveLectureComponent', () => {
  let component: ModalRemoveLectureComponent;
  let fixture: ComponentFixture<ModalRemoveLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalRemoveLectureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRemoveLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
