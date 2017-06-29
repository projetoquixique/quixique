import { Component, OnInit, ViewChild, ElementRef, ViewChildren, AfterViewInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio-processos-viewer',
  templateUrl: './portfolio-processos-viewer.component.html',
  styleUrls: ['./portfolio-processos-viewer.component.css']
})
export class PortfolioProcessosViewerComponent implements OnInit {

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
    while(this.full > 0){
      tam = this.sort(this.full, 1);
      this.full -= tam;
      this.dimensoes.push(tam);
      this.imgs--;  
    }
  }

  gerarVitrine(){
    while(this.imgs > 0){
      this.gerarLinha();
    }
  }

  @Input() parentDivClass:string;
  containerRetraido:boolean = true;
  alturaContainerRetraido:number = (this.alturaBase * 2);

  expandirContainer() {
    $("." + this.parentDivClass + " .pictures").animate({height: $("." + this.parentDivClass + " .pictures").get(0).scrollHeight}, 500 );
    this.containerRetraido = false;
  }

  retrairContainer() {
    $("." + this.parentDivClass + " .pictures").animate({height: this.alturaContainerRetraido}, 500 );
    $('html, body').animate({
      scrollTop: $("." + this.parentDivClass).offset().top
    }, 500);
    this.containerRetraido = true;
  }

  showFullscreen:boolean = false;
  srcLightbox:string;

  lightboxControl(event){
    this.showFullscreen = !this.showFullscreen;
    if (event) {
      this.srcLightbox = event.target.src;
    }
    if (!this.showFullscreen) {
      $("body").css({"overflow":"auto", "margin-right":"0"});
    } else {
      $("body").css({"overflow":"hidden","margin-right":"15px"});
      // $(document).keyup(function(e) {
      //   if (e.keyCode === 27) {
      //     $(".close-lightbox").click();
      //   }
      // });
    };
  };

  constructor() { }

  ajustCover(){
    let containers = this.vitrine._results;
    for(let i in containers){
      var imgs = [];
      var containerAspectRatio = containers[i].nativeElement.clientHeight/containers[i].nativeElement.clientWidth;
      imgs.push(containers[i].nativeElement.firstElementChild);      
      for (let i in imgs){
        var imgAspectRatio = imgs[i].naturalHeight/imgs[i].naturalWidth;
        if(imgAspectRatio < containerAspectRatio){
          this.itemClass.push('tall');
        }else{
          this.itemClass.push('wide');                                             
        }
      }
      
    }
  }

  ngAfterViewInit() {
    this.ajustCover();
  }

  ngOnInit() {
    this.gerarVitrine();
    $('.pictures').css('height', this.alturaContainerRetraido);
  }
}
