import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';
import { Category } from './../page-start/categories/category-thumbnail/category-thumbnail.model';
import { TelaPrincipalCienteService } from './../tela-principal-cliente/tela-principal-cliente.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.css']
})
export class NavbarClienteComponent implements OnInit {

 @Input() categories:Array<Category> = [
    new Category("Madeira","Encontre aqui as melhores peças esculpidas em madeira para decoração.","banner (1).png"),
    new Category("Pedra Sabão","O dom de transformar um simples pedaço de rocha nas mais sinuosas curvas de um corpo.","banner (2).png"),
    new Category("Barro","Aqui você encontra os mais diversos artesanatos em barro com características da cultura regional.","banner (3).png"),
    new Category("Biscuit","Artesanato em biscuit para casamentos, formaturas, aniversários e decorações em geral.","banner (4).png"),
    new Category("Cama, mesa e banho","Temos a maior variedade em conforto e beleza para sua casa.","banner (5).png"),
    new Category("Religiosos","Artigos religiosos que dão um toque divino para sua casa","banner (6).png"),
    new Category("Couro","Encontre uma grande variedade em peças de couro de alta qualidade.","banner (7).png"),
    new Category("Decoração","Diversidade de objetos que dão o toque especial que falta nos ambientes de sua casa.","banner (8).png"),
    new Category("Pintura","Veja através dos olhos dos nossos melhores artesãos as belezas que tornarão seus dias mais felizes.","banner (9).png"),
    new Category("Bijuteria","Sua oportunidade de ficar ainda mais deslumbrante, valorizando seu charme de forma barata e elegante.","banner (10).png"),
    new Category("Vestuário","Do popular ao estilizado, nossos artesãos possuem nas mãos, a capacidade de representar os valores de cada cliente.","banner (11).png"),
    new Category("Recicláveis","Recriar é um dom que você verá por aqui. De uma coisa sem valor à um objeto de valor.","banner (12).png"),
  ];
  
  // userName = sessionStorage.getItem('currentUserName');

  constructor(private clientService:TelaPrincipalCienteService) { }

  // logout() {
  //   if (this.authService.logout()){
  //     this.router.navigate(['/']);
  //   }
  // }

  // carrinho:Array<any> = this.clientService.carrinho;
  // qtdCarrinho:number = this.clientService.qtdCarrinho;

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
    this.clientService.start();
  }

}
