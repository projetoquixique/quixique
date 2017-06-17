import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselComponent } from './carrossel.component';

describe('CarrosselComponent', () => {
  let component: CarrosselComponent;
  let fixture: ComponentFixture<CarrosselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
