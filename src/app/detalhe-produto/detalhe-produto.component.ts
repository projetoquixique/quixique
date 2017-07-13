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

  // thumbnails;
  selectedImage;
  showFullscreen:boolean = false;
  public product = {
    title:'',
    price:'',
    units:'',
    size:'',
    materials:'',
    description:'',
    imagem: [],
    authorBio:''
  };

  anotherAuthorProducts;
  productSuggestions;
  newComment:string;
  comments;

  getProduct(id){
    this.requestService.get(this.serverBaseUrl + '/produto/' + id).subscribe(
      data => {
        this.product = data;
        console.log(this.product)
        // console.log(this.serverBaseImageUrl + '/imagens-produtos/' + this.product.imagem[0]);
        this.selectedImage = this.serverBaseImageUrl + '/imagens-produtos/' + this.product.imagem[0];
      },
      error => {
        console.log(error);
      });
  }

  setSelectedImage(image){
    this.selectedImage = this.serverBaseImageUrl + '/imagens-produtos/' + image;
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
    console.log(this.idProduto);
    this.requestService.get(this.serverBaseUrl + '/comentarios/' + this.idProduto).subscribe(
      data => {console.log(data); this.comments = data;},
      erro => {console.log(erro)}
    );

    if (sessionStorage.getItem('productDetailId') !== 'undefined') {
      this.getProduct(sessionStorage.getItem('productDetailId'));
      sessionStorage.removeItem('productDetailId');
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