import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorCaracteresComponent } from './contador-caracteres.component';

describe('ContadorCaracteresComponent', () => {
  let component: ContadorCaracteresComponent;
  let fixture: ComponentFixture<ContadorCaracteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorCaracteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorCaracteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
