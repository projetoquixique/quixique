import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfograficoComponent } from './infografico.component';

describe('InfograficoComponent', () => {
  let component: InfograficoComponent;
  let fixture: ComponentFixture<InfograficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfograficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfograficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
