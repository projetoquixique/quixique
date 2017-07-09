import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoArtesaoComponent } from './historico-artesao.component';

describe('HistoricoArtesaoComponent', () => {
  let component: HistoricoArtesaoComponent;
  let fixture: ComponentFixture<HistoricoArtesaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoArtesaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoArtesaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
