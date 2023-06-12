import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditMovimentoComponent } from './form-edit-movimento.component';

describe('FormEditMovimentoComponent', () => {
  let component: FormEditMovimentoComponent;
  let fixture: ComponentFixture<FormEditMovimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditMovimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
