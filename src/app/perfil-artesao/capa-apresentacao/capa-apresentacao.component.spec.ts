import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaApresentacaoComponent } from './capa-apresentacao.component';

describe('CapaApresentacaoComponent', () => {
  let component: CapaApresentacaoComponent;
  let fixture: ComponentFixture<CapaApresentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapaApresentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapaApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
