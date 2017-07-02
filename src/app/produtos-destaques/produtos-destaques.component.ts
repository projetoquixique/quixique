import { Component, OnInit, ViewChild, ElementRef, ViewChildren, AfterViewChecked, AfterViewInit } from '@angular/core';

// import * as $ from 'jquery';

@Component({
  selector: 'app-produtos-destaques',
  templateUrl: './produtos-destaques.component.html',
  styleUrls: ['./produtos-destaques.component.css']
})
export class ProdutosDestaquesComponent implements OnInit, AfterViewInit, AfterViewChecked {

  vh = window.innerHeight/100;
  vw = window.innerWidth/100;

  @ViewChildren('vitrine') vitrine:any;

  itemClass = [];

  images:any = 
  [
    "img (1).jpg",
    "img (2).jpg",
    "img (3).jpg",
    "img (4).jpg",
    "img (5).jpg",
    "img (6).jpg",
    "img (7).jpg",
    "img (8).jpg",
    "img (9).jpg",
    "img (10).jpg",
    "img (11).jpg",
    "img (12).jpg",
    "img (13).jpg"
  ];

  alturaBase = 30 * this.vh;
  numLinhas = 0;
  imgs = this.images.length;
  full = 0;
  limit = 3;

  dimensoes:any = [];


  sort(max, min){
    let tam = Math.floor(Math.random()*(max - min + 1)) + min;
    return tam;
  }

  gerarLinha(){
      this.full = 4;
      var tam = this.sort(this.limit, 1);
      this.full -= tam;
      this.dimensoes.push(tam);
      this.imgs--; 
      // console.log(this.imgs);

      while(this.full > 0){
        tam = this.sort(this.full, 1);
        this.full -= tam;
        this.dimensoes.push(tam);
        this.imgs--;  
        // console.log(this.imgs);
      }
    // console.log(this.dimensoes);
  }

  gerarVitrine(){
    while(this.imgs > 0){
      this.gerarLinha();
    }
    // this.ajustCover();
  }
  
  constructor() { }

  // ajustCover(){
  //   $(function(){
  //     $('.container-object-fit').find('.item-object-fit').each(function() {
  //         var itemClass;
  //         var imgAspectRatio = $(this).width()/$(this).height();

  //         // console.log('imagem: '+$(this).width()+' '+$(this).height());
  //         // console.log(imgAspectRatio);
          

  //         // var imgAspectRatio = this.width/this.height; não funciona com videos

  //         $('.container-object-fit').each(function(){
  //             var containerAspectRatio = $(this).width()/$(this).height();

  //             // console.log('container: '+$(this).width()+' '+$(this).height());
  //             // console.log(containerAspectRatio);
              
  //             if(imgAspectRatio > containerAspectRatio){
  //                 itemClass = 'tall';
  //             }else{
  //                 itemClass = 'wide';                                    
  //             }
  //         });
  //         // console.log(itemClass);
  //         $(this).addClass(itemClass);
  //     })
  //   });
  // }

  ajustCover(){
    let containers = this.vitrine._results;

    for(let i in containers){

      var imgs = [];

      var containerAspectRatio = containers[i].nativeElement.clientHeight/containers[i].nativeElement.clientWidth;

      imgs.push(containers[i].nativeElement.firstElementChild);
      
      for (let i in imgs){
        var imgAspectRatio = imgs[i].naturalHeight/imgs[i].naturalWidth;

        console.log('img: '+imgAspectRatio);
        console.log('container: '+containerAspectRatio);

        if(imgAspectRatio < containerAspectRatio){
            this.itemClass.push('tall');
            console.log('imagem ' + i +': '+ this.itemClass);
        }else{
            this.itemClass.push('wide');             
            console.log('imagem ' + i +': '+ this.itemClass);                                   
        }
      }
      
    }
  }

  ngAfterViewInit() {
    // alert('iniciou');
    this.ajustCover();
  }

  ngAfterViewChecked(){
    // alert('checou');    
  }
  

  ngOnInit() {
    this.gerarVitrine();
  }

}
