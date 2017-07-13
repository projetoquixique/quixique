import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { RequestService } from './../services/request.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  public serverBaseUrl = this.requestService.serverBaseUrl;
  public serverBaseImageUrl = this.requestService.serverBaseImageUrl;

  public artisan = {
    bio:'',
    username:'',
    id:''
  };

  // thumbnails;
  public selectedImage;
  public showFullscreen:boolean = false;

  public product = {
    title:'',
    price:'',
    units:'',
    size:'',
    materials:'',
    description:'',
    category: '',
    imagem: []
  };

  public anotherArtisanProducts = {};
  public productSuggestions = {};

  newComment:string;
  comments;

  getProduct(id){
    this.requestService.get(this.serverBaseUrl + '/produto/' + id).subscribe(
      data => {
        this.product = data;
        this.getProductSuggestions(data.category);
        this.selectedImage = this.serverBaseImageUrl + '/imagens-produtos/' + this.product.imagem[0];
      },
      error => {
        console.log(error);
      }
    );
  }

  getProductSuggestions(category){
    console.log(this.serverBaseUrl + '/produtos/' + category + '/recomendacoes')
    this.requestService.get(this.serverBaseUrl + '/produtos/' + category + '/recomendacoes').subscribe(
      data => {
        this.productSuggestions = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getArtisanInfo(){
    console.log(this.serverBaseUrl + '/artesao/' + this.artisan.id + '/bio')
    this.requestService.get(this.serverBaseUrl + '/artesao/' + this.artisan.id + '/bio').subscribe(
      data => {
        this.artisan.bio = data.historia;
        this.artisan.username = data.nomeDeUsuario;
      },
      error => {
        console.log(error);
      }
    );
  }

  goToArtisanProfile(){
    sessionStorage.setItem('artisanProfileUsername', this.artisan.username);
    sessionStorage.setItem('artisanProfileId', this.artisan.id);
    this.router.navigate(['/perfil']);
  }

  getArtisanRecommendations(){
    this.requestService.get(this.serverBaseUrl + '/' + this.artisan.id + '/recomendacoes').subscribe(
      data => {
        this.anotherArtisanProducts = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  setSelectedImage(image){
    this.selectedImage = this.serverBaseImageUrl + '/imagens-produtos/' + image;
  }

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

  constructor(private requestService:RequestService,
              private router:Router) {
    this.comments = [];
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
  
  idProduto;

  ngOnInit() {
    this.idProduto = sessionStorage.getItem('productDetailId');
    // console.log(this.idProduto);
    this.requestService.get(this.serverBaseUrl + '/comentarios/' + this.idProduto).subscribe(
      data => {console.log(data); this.comments = data;},
      erro => {console.log(erro)}
    );

    if (sessionStorage.getItem('productDetailId') !== 'undefined') {
      this.getProduct(sessionStorage.getItem('productDetailId'));
      this.artisan.id = sessionStorage.getItem('productDetailAid');
      this.getArtisanRecommendations();
      this.getArtisanInfo();
      // sessionStorage.removeItem('productDetailId');
      // sessionStorage.removeItem('productDetailAid');
      this.ajustCover();
      $(document).ready(function(){
        $(".filter.thumbnail-product:first").addClass("selected-thumbnail");
      });
    } else {
      console.log('notok')
      this.router.navigate(['/']);
    }
  }
  
  enviarComentario(){
    var comentario = {"cid":sessionStorage.getItem('userId'), "pid":this.idProduto, "comentario":this.newComment};
    this.requestService.post(this.serverBaseUrl  + '/comentarios', comentario).subscribe(
      data => {console.log(data); 
            this.newComment = "";
            this.requestService.get(this.serverBaseUrl + '/comentarios/' + this.idProduto).subscribe(
              data => {console.log(data); this.comments = data;},
              erro => {console.log(erro)}
    );
      },
      erro => {console.log(erro)}
    )
  }

}