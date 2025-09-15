import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGato } from './modal-gato';

describe('ModalGato', () => {
  let component: ModalGato;
  let fixture: ComponentFixture<ModalGato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalGato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
