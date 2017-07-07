import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProcessosViewerComponent } from './portfolio-processos-viewer.component';

describe('PortfolioProcessosViewerComponent', () => {
  let component: PortfolioProcessosViewerComponent;
  let fixture: ComponentFixture<PortfolioProcessosViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProcessosViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProcessosViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
