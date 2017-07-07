import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosOfertasComponent } from './produtos-ofertas.component';

describe('ProdutosOfertasComponent', () => {
  let component: ProdutosOfertasComponent;
  let fixture: ComponentFixture<ProdutosOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
