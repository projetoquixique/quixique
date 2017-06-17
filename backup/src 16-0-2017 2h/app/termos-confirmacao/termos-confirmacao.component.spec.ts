import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosConfirmacaoComponent } from './termos-confirmacao.component';

describe('TermosConfirmacaoComponent', () => {
  let component: TermosConfirmacaoComponent;
  let fixture: ComponentFixture<TermosConfirmacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermosConfirmacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
