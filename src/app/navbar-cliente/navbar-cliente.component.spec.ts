import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarClienteComponent } from './navbar-cliente.component';

describe('NavbarClienteComponent', () => {
  let component: NavbarClienteComponent;
  let fixture: ComponentFixture<NavbarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
