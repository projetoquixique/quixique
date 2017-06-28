import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPecaComponent } from './ver-peca.component';

describe('VerPecaComponent', () => {
  let component: VerPecaComponent;
  let fixture: ComponentFixture<VerPecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
