import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroStartComponent } from './form-cadastro-start.component';

describe('FormCadastroStartComponent', () => {
  let component: FormCadastroStartComponent;
  let fixture: ComponentFixture<FormCadastroStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastroStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
