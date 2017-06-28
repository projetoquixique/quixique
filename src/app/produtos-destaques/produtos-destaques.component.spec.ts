import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDestaquesComponent } from './produtos-destaques.component';

describe('ProdutosDestaquesComponent', () => {
  let component: ProdutosDestaquesComponent;
  let fixture: ComponentFixture<ProdutosDestaquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosDestaquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
