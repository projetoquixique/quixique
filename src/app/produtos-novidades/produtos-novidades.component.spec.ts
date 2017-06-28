import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosNovidadesComponent } from './produtos-novidades.component';

describe('ProdutosNovidadesComponent', () => {
  let component: ProdutosNovidadesComponent;
  let fixture: ComponentFixture<ProdutosNovidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosNovidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosNovidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
