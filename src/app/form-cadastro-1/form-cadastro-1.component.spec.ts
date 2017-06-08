import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastro1Component } from './form-cadastro-1.component';

describe('FormCadastro1Component', () => {
  let component: FormCadastro1Component;
  let fixture: ComponentFixture<FormCadastro1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastro1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
