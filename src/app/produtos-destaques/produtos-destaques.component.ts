import { TelaPrincipalCienteService } from './../tela-principal-cliente/tela-principal-cliente.service';
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

  images:[any] = [
      {
          "id":"1","extra":{"chave":"valor"} ,"nome":"Enfeite para parede Arara Colorida - Diversos tamanhos",
          "preco":23.00, "img":"img (1).jpg","estoque":"7"
      },
      {
          "id":"2","extra":{"chave":"valor"} ,"nome":"Chaveiro personalizado Galinha Choca Quixadá",
          "preco":6.00, "img":"img (2).jpg","estoque":"3"
      },
      {
          "id":"3","extra":{"chave":"valor"} ,"nome":"Porta-ovos Galinha Pintadinha - Diversas cores",
          "preco":24.00, "img":"img (3).jpg","estoque":"5"
      },
      {
          "id":"4","extra":{"chave":"valor"} ,"nome":"Enfeite para parede Flor e joaninha",
          "preco":35.00, "img":"img (4).jpg","estoque":"5"
      },
      {
          "id":"5","extra":{"chave":"valor"} ,"nome":"Boneco de palha e cabaça Malandrinho de chapéu",
          "preco":25.00, "img":"img (5).jpg","estoque":"9"
      },
      {
          "id":"6","extra":{"chave":"valor"} ,"nome":"Enfeite para parede Casinha de barro",
          "preco":16.00, "img":"img (6).jpg","estoque":"2"
      },
      {
          "id":"7","extra":{"chave":"valor"} ,"nome":"Porta chaves Papagaios famintos",
          "preco":13.00, "img":"img (7).jpg","estoque":"8"
      },
      {
          "id":"8","extra":{"chave":"valor"} ,"nome":"Escultura de madeira Boi do sertão",
          "preco":23.00, "img":"img (8).jpg","estoque":"5"
      },
      {
          "id":"9","extra":{"chave":"valor"} ,"nome":"Sandália de couro Maria Bonita - num 35 a 40",
          "preco":63.00, "img":"img (9).jpg"
      },
      {
          "id":"10","extra":{"chave":"valor"} ,"nome":"Jogo de chá de Barro Casa da vovó",
          "preco":56.00, "img":"img (10)jpgg"
      },
      {
          "id":"11","extra":{"chave":"valor"} ,"nome":"Enfeite de telha para parede Pôr-do-sol no Cedro",
          "preco":27.00, "img":"img (11)jpgg"
      },
       {
          "id":"12","extra":{"chave":"valor"} ,"nome":"Brincos de crochê Ganhei do Crush",
          "preco":12.00, "img":"img (12)jpgg"
      },
      {
          "id":"13","extra":{"chave":"valor"} ,"nome":"Peso para papel Galinha Choca Quixadá",
          "preco":15.00, "img":"img (13)jpgg"
      }
  ];


  // images:any = 
  // [
  //   "img (1).jpg",
  //   "img (2).jpg",
  //   "img (3).jpg",
  //   "img (4).jpg",
  //   "img (5).jpg",
  //   "img (6).jpg",
  //   "img (7).jpg",
  //   "img (8).jpg",
  //   // "img (9).jpg",
  //   // "img (10).jpg",
  //   // "img (11).jpg",
  //   // "img (12).jpg",
  //   // "img (13).jpg"
  // ];

  alturaBase = 30 * this.vh;
  numLinhas = 2;
  imgs = this.images.length;
  totalImgs = this.numLinhas * 4;
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

  gerarVitrine(num){
    let line = 0;
    while(line < num){
      this.gerarLinha();
      line += 1;
    }

    for(let i = 0; i < this.imgs; i++){
      this.images.pop();
    }

    // this.ajustCover();
  }
  
  constructor(private clientService:TelaPrincipalCienteService) { }

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
    this.gerarVitrine(this.numLinhas);
  }

}
