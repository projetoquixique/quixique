import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemErroInputComponent } from './mensagem-erro-input.component';

describe('MensagemErroInputComponent', () => {
  let component: MensagemErroInputComponent;
  let fixture: ComponentFixture<MensagemErroInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagemErroInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemErroInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
