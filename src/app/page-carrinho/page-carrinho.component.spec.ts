import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarrinhoComponent } from './page-carrinho.component';

describe('PageCarrinhoComponent', () => {
  let component: PageCarrinhoComponent;
  let fixture: ComponentFixture<PageCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
