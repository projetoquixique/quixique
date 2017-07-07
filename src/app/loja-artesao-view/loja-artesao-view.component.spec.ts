import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaArtesaoViewComponent } from './loja-artesao-view.component';

describe('LojaArtesaoViewComponent', () => {
  let component: LojaArtesaoViewComponent;
  let fixture: ComponentFixture<LojaArtesaoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaArtesaoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaArtesaoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
