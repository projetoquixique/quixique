import { Category } from './category-thumbnail.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-thumbnail',
  templateUrl: './category-thumbnail.component.html',
  styleUrls: ['./category-thumbnail.component.css']
})
export class CategoryThumbnailComponent implements OnInit {

  @Input ()category:Category;

  constructor() { }

  ngOnInit() {
  }

}
