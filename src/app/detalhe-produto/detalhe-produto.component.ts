import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  thumbnails;
  selectedImage;
  showFullscreen:boolean = false;
  product;
  anotherAuthorProducts;
  productSuggestions;
  newComment:string;
  comments;

  setSelectedImage(image){
    this.selectedImage = image;
  };

  setSelectedThumbnail(e){
    $(".thumbnail-product").removeClass("selected-thumbnail");
    $(e.target.parentElement).addClass("selected-thumbnail");
  };

  lightboxControl(){
    this.showFullscreen = !this.showFullscreen;
    if (!this.showFullscreen) {
      $("body").css({"overflow":"auto", "margin-right":"0"});
    } else {
      $("body").css({"overflow":"hidden","margin-right":"15px"});
      $(document).keyup(function(e) {
        if (e.keyCode === 27) {
          $(".close-lightbox").click();
        }
      });
    };
  };

  constructor() {
    this.thumbnails = [
      {"url":"assets/images/components/detalhe-produto/img-01.jpg"},
      {"url":"assets/images/components/detalhe-produto/img-02.jpg"},
      {"url":"assets/images/components/detalhe-produto/img-03.jpg"},
      {"url":"assets/images/components/detalhe-produto/img-04.jpg"},
      {"url":"assets/images/components/detalhe-produto/img-05.jpg"}
    ];

    this.product = {title:'Enfeite para parede "Telhas pintadas com as belezas de Quixadá"',
                    price:'24.99',
                    units:50,
                    size:'40cm',
                    materials:'barro',
                    description:'Enfeite para parede "Telhas pintadas com as belezas de Quixadá" - nas cores lilás, vermelho e amarelo. Enfeite para parede "Telhas pintadas com as belezas de Quixadá" - nas cores lilás, vermelho e amarelo. Enfeite para parede "Telhas pintadas com as belezas de Quixadá" - nas cores lilás, vermelho e amarelo.',
                    authorBio:'Meu nome é Joana e trabalho especificamente com produtos feitos de barro.'};

    this.anotherAuthorProducts = [
      {'imageUrl':'assets/images/components/detalhe-produto/more-01.jpg'},
      {'imageUrl':'assets/images/components/detalhe-produto/more-02.jpg'},
      {'imageUrl':'assets/images/components/detalhe-produto/more-03.jpg'},
      {'imageUrl':'assets/images/components/detalhe-produto/more-04.jpg'}
    ];

    this.productSuggestions = [
      {'imageUrl':'assets/images/components/detalhe-produto/suggestion-01.jpg'},
      {'imageUrl':'assets/images/components/detalhe-produto/suggestion-02.jpg'},
      {'imageUrl':'assets/images/components/detalhe-produto/suggestion-03.jpg'},
      {'imageUrl':'assets/images/components/detalhe-produto/suggestion-04.jpg'}
    ];
    
    this.comments = [
      {"author":"Maria", "text":"Produto de ótima qualidade! Recomendo!"},
      {"author":"José", "text":"Chegou direitinho, estou bastante satisfeito!"},
      {"author":"Amanda", "text":"Comprei e adorei!"}
    ];

    this.selectedImage = this.thumbnails[0];
  };

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
  };

  ngOnInit() {
    this.ajustCover();
    $(document).ready(function(){
      $(".filter.thumbnail-product:first").addClass("selected-thumbnail");
    });
  }

}