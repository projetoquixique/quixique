import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieThumbnailComponent } from './category-thumbnail.component';

describe('CategoryThumbnailComponent', () => {
  let component: CategorieThumbnailComponent;
  let fixture: ComponentFixture<CategorieThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
