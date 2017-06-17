import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPedidoPequenoComponent } from './card-pedido-pequeno.component';

describe('CardPedidoPequenoComponent', () => {
  let component: CardPedidoPequenoComponent;
  let fixture: ComponentFixture<CardPedidoPequenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPedidoPequenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPedidoPequenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
