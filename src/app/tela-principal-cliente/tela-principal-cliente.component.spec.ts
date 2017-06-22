import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPrincipalClienteComponent } from './tela-principal-cliente.component';

describe('TelaPrincipalClienteComponent', () => {
  let component: TelaPrincipalClienteComponent;
  let fixture: ComponentFixture<TelaPrincipalClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPrincipalClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPrincipalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
