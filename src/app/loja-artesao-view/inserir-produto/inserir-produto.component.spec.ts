import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirProdutoComponent } from './inserir-produto.component';

describe('InserirProdutoComponent', () => {
  let component: InserirProdutoComponent;
  let fixture: ComponentFixture<InserirProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
