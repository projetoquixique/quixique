import { Category } from './category-thumbnail.model';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';

// declare var jQuery:any;
// declare var $:any;

@Component({
  selector: 'app-category-thumbnail',
  templateUrl: './category-thumbnail.component.html',
  styleUrls: ['./category-thumbnail.component.css']
})

export class CategoryThumbnailComponent implements OnInit {

  @Input ()category:Category;

  constructor() { }

  ajustCover(){
    $(document).ready(function(){
      $('.container-object-fit').find('.item-object-fit').each(function() {
          var itemClass;
          var imgAspectRatio = $(this).innerWidth()/$(this).innerHeight();
          // var imgAspectRatio = this.width/this.height; não funciona com videos

          $('.container-object-fit').each(function(){
              var containerAspectRatio = $(this).innerWidth()/$(this).innerHeight();
              if(imgAspectRatio > containerAspectRatio){
                  itemClass = 'tall';
              }else{
                  itemClass = 'wide';                                    
              }
          });
          $(this).addClass(itemClass);
      })
    });
  }

  ngOnInit() {
    this.ajustCover();
  }

}
