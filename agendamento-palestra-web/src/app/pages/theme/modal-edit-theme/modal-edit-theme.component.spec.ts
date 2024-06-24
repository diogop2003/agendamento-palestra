import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditThemeComponent } from './modal-edit-theme.component';

describe('ModalEditThemeComponent', () => {
  let component: ModalEditThemeComponent;
  let fixture: ComponentFixture<ModalEditThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEditThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
