import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPedidoGrandeComponent } from './card-pedido-grande.component';

describe('CardPedidoGrandeComponent', () => {
  let component: CardPedidoGrandeComponent;
  let fixture: ComponentFixture<CardPedidoGrandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPedidoGrandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPedidoGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
