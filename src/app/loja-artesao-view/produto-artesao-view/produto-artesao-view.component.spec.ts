import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoArtesaoViewComponent } from './produto-artesao-view.component';

describe('ProdutoArtesaoViewComponent', () => {
  let component: ProdutoArtesaoViewComponent;
  let fixture: ComponentFixture<ProdutoArtesaoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoArtesaoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoArtesaoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
