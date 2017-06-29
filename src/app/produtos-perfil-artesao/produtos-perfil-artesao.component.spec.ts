import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosPerfilArtesaoComponent } from './produtos-perfil-artesao.component';

describe('ProdutosPerfilArtesaoComponent', () => {
  let component: ProdutosPerfilArtesaoComponent;
  let fixture: ComponentFixture<ProdutosPerfilArtesaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosPerfilArtesaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosPerfilArtesaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
