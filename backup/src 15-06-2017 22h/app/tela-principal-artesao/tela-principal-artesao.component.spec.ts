import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPrincipalArtesaoComponent } from './tela-principal-artesao.component';

describe('TelaPrincipalArtesaoComponent', () => {
  let component: TelaPrincipalArtesaoComponent;
  let fixture: ComponentFixture<TelaPrincipalArtesaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPrincipalArtesaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPrincipalArtesaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
