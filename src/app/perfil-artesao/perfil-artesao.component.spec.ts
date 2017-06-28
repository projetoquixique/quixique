import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilArtesaoComponent } from './perfil-artesao.component';

describe('PerfilArtesaoComponent', () => {
  let component: PerfilArtesaoComponent;
  let fixture: ComponentFixture<PerfilArtesaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilArtesaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilArtesaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
