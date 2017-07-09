import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { UserDataHandlerService } from './../services/user-data-handler.service';
import { RequestService } from './../services/request.service';

@Component({
  selector: 'app-perfil-artesao',
  templateUrl: './perfil-artesao.component.html',
  styleUrls: ['./perfil-artesao.component.css']
})
export class PerfilArtesaoComponent implements OnInit {

  // Comprando meus produtos, você vai levar mais do que o meu trabalho, vai levar uma dose de amor <3

  // infoPerfil = {  
  //   nome:"Maria Oliveira",
  //   bio:"Escultora, 8 anos de profissão",
  //   localizacao:"Quixadá, Ceará",
  //   apresentacao:"Ser escultora é mais que uma profissão, é uma paixão que alimento todos os dias.",
  //   historia:"25 anos de idade. Produzo as mais variadas peças em madeira e afins. Com 17 anos de idade, eu aprendi o básico de escultura em um curso ofertado na minha cidade. Com o passar do tempo, eu pratiquei minha arte até criar meu próprio estilo de esculpir. Hoje, eu trabalho como autônoma e vendo esculturas das mais diversas formas e temáticas. Sou muito feliz com o que faço e meu sonho é poder transmitir os meus conhecimentos a outros interessados, para que a arte nunca morra.",
  //   urlLoja:"#",
  //   telefone:"(88) 9 8128-1741",
  //   email:"oliveiramaria_esculturas@gmail.com",
  //   urlFacebook:"@mariaoliveiralima_esculturas",
  //   urlInstagram:"@mariaesculturas"
  // }

  public urlPerfil:string = this.requestService.serverBaseUrl + "/artesao/" + sessionStorage.getItem('username');
  private urlAtualizacaoDados:string = this.requestService.serverBaseUrl + "/artesao/" + sessionStorage.getItem('username') + "/atualizarperfil";
  
  public infoPerfil = {
    nomeApresentacao:null,
    bio:null,
    localizacao:null,
    apresentacao:null,
    historia:null,
    urlLoja:null,
    telefone:null,
    email:null,
    urlFacebook:null,
    urlInstagram:null
  }

  requestDadosPerfil(){
    this.requestService.get(this.urlPerfil).subscribe(
      data => {
        this.userDataHandler.dadosPerfil = data;
        this.infoPerfil = this.userDataHandler.dadosPerfil;
      },
      error => {
        console.log(error);
      });
  }

  atualizarDadosPerfil(){
    console.log(this.urlAtualizacaoDados, this.infoPerfil)
    // this.requestService.put(this.urlAtualizacaoDados, this.infoPerfil).subscribe(
    //   data => console.log('updated'),
    //   error => {
    //     alert("Houve um erro. Por favor, tente novamente.");
    //   });
  }

  public modoEdicao = false;

  editarPerfil(){
    this.modoEdicao = true;
    $(".modo-edicao").css("opacity", 1);
    // $(".perfil .editavel").css("background-color", "#6d361c");
    // $(".historia .editavel").css("background-color", "#e28f2b");
    $(".btn-editar").hide();
    console.log('editando', this.modoEdicao)
  }

  cancelarEdicao(){
    this.modoEdicao = false;
    // $(".modo-edicao").css("opacity", 0);
    $(".btn-editar").show();
    console.log('cancelando', this.modoEdicao)
  }

  irParaSaibaMais() {
    $('html, body').animate({
      scrollTop: $(".saiba-mais").offset().top - 130
    }, 500);
  }
 
  constructor(private userDataHandler:UserDataHandlerService,
              private requestService:RequestService) { }

  ngOnInit() {
    this.requestDadosPerfil();
  }

}
