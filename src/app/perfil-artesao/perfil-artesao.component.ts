import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { FileUploader } from 'ng2-file-upload';


import { AuthenticationService } from './../services/authentication.service';
import { UserDataHandlerService } from './../services/user-data-handler.service';
import { RequestService } from './../services/request.service';

const URL = 'http://localhost:3000/api/perfil/upload';

@Component({
  selector: 'app-perfil-artesao',
  templateUrl: './perfil-artesao.component.html',
  styleUrls: ['./perfil-artesao.component.css']
})



export class PerfilArtesaoComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url:URL});

  public texto:string = '';

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
  
  public telefoneMask = ['(', /\d/, /\d/, ')', ' ', /9/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

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

  public contadores = {
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

  contadorCaracteresRestantes(alvo, max){
    this.contadores[alvo] = (max - this.infoPerfil[alvo].length);
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
    this.modoEdicao = false;
    $(".btn-editar").show();
    this.requestService.put(this.urlAtualizacaoDados, this.infoPerfil).subscribe(
      data => { 
        sessionStorage.setItem('name', this.infoPerfil.nomeApresentacao);
      },
      error => {
        alert("Houve um erro. Por favor, tente novamente.");
      });
  }

  private modoEdicao:boolean = false;

  editarPerfil():void {
    $(".modo-edicao").css("opacity", 1);
    $(".btn-editar").hide();
    this.modoEdicao = true;
  }

  cancelarEdicao():void {
    $(".btn-editar").show();
    this.modoEdicao = false;
    this.infoPerfil = this.userDataHandler.dadosPerfil;
  }

  irParaSaibaMais():void {
    $('html, body').animate({
      scrollTop: $(".saiba-mais").offset().top - 130
    }, 500);
  }
 
  constructor(private userDataHandler:UserDataHandlerService,
              private requestService:RequestService,
              private authService:AuthenticationService,
              private router:Router) { }

  ngOnInit() {
    if (!this.authService.isLogged()){
      this.router.navigate(['/']);
    } else {
      this.requestDadosPerfil();
    }
  }

}
