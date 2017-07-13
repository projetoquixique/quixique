import { Category } from './category-thumbnail.model';
import { Component, OnInit, Input, AfterViewInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

// declare var jQuery:any;
// declare var $:any;


@Component({
  selector: 'app-category-thumbnail',
  templateUrl: './category-thumbnail.component.html',
  styleUrls: ['./category-thumbnail.component.css']
})

export class CategoryThumbnailComponent implements OnInit, AfterViewInit {

  @ViewChildren('container') container:any;

  itemClass = null;

  @Input ()category:Category;

  @Input ()index:any;

  constructor(private router:Router) { }

  // ajustCover(){
  //   console.log('Agora é nois mesmo');
  //   $(document).ready(function(){
  //     $('.container-object-fit').find('.item-object-fit').each(function() {
  //         var itemClass;
  //         var imgAspectRatio = $(this).innerWidth()/$(this).innerHeight();
  //         // var imgAspectRatio = this.width/this.height; não funciona com videos

  //         $('.container-object-fit').each(function(){
  //             var containerAspectRatio = $(this).innerWidth()/$(this).innerHeight();
  //             if(imgAspectRatio > containerAspectRatio){
  //                 itemClass = 'tall';
  //             }else{
  //                 itemClass = 'wide';                                    
  //             }
  //         });
  //         $(this).addClass(itemClass);
  //     })
  //   });
  // }

  ajustCover(){
    // alert(this.index);
    let containers = this.container._results;
    // console.log(containers);

    for(let i in containers){

      var imgs = [];

      var containerAspectRatio = containers[i].nativeElement.clientHeight/containers[i].nativeElement.clientWidth;
      // alert("container: "+containerAspectRatio);

      imgs.push(containers[i].nativeElement.lastElementChild);
      
      for (let i in imgs){
        var imgAspectRatio = imgs[i].naturalHeight/imgs[i].naturalWidth;

        // alert("imagem: "+imgAspectRatio);
        

        // console.log('img: '+imgAspectRatio);
        // console.log('container: '+containerAspectRatio);

        if(imgAspectRatio < containerAspectRatio){
            this.itemClass = 'tall';
            // console.log('imagem ' + i +': '+ this.itemClass);
        }else{
            this.itemClass = 'wide';             
            // console.log('imagem ' + i +': '+ this.itemClass);                                   
        }
      }
    }
  }

  exibirProdutosCategoria(categoria) {
    sessionStorage.setItem('categorySearch', categoria);
    this.router.navigate(['/categoria']);
  }

  ngAfterViewInit(){
    this.ajustCover();
  }

  ngOnInit() {
    // this.ajustCover();
  }

}
