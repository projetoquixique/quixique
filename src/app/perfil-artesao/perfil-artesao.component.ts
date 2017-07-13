import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { FileUploader } from 'ng2-file-upload';

import { AuthenticationService } from './../services/authentication.service';
import { UserDataHandlerService } from './../services/user-data-handler.service';
import { RequestService } from './../services/request.service';

@Component({
  selector: 'app-perfil-artesao',
  templateUrl: './perfil-artesao.component.html',
  styleUrls: ['./perfil-artesao.component.css']
})

export class PerfilArtesaoComponent implements OnInit {

  private URL = this.requestService.serverBaseUrl + '/perfil/upload';

  public uploader:FileUploader = new FileUploader({url:this.URL});

  public texto:string = '';

  public userType;
  public urlProdutos;
  public isLogged = this.authService.isLogged();

  private urlPerfil:string = this.requestService.serverBaseUrl + "/artesao/" + sessionStorage.getItem('username');
  private urlAtualizacaoDados:string = this.requestService.serverBaseUrl + "/artesao/" + sessionStorage.getItem('username') + "/atualizarperfil";

  public telefoneMask = ['(', /\d/, /\d/, ')', ' ', /9/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public infoPerfil = {
    nomeApresentacao:null,
    fotoPerfil: null,
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
        if (this.infoPerfil.fotoPerfil == null) {
          this.infoPerfil.fotoPerfil = "https://www.workplaceleadership.com.au/app/themes/cwl/assets/img/regular_res/default-user.png";
        } else {
          this.infoPerfil.fotoPerfil = this.requestService.serverBaseImageUrl + '/imagens-perfis/' + sessionStorage.getItem('profilePicture');
        }
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
        sessionStorage.setItem('profilePicture', this.infoPerfil.fotoPerfil);
      },
      error => {
        // alert("Houve um erro. Por favor, tente novamente.");
      });
  }

  private modoEdicao:boolean = false;

  editarPerfil():void {
    sessionStorage.setItem('backupInfoPerfil', JSON.stringify(this.infoPerfil));
    $(".modo-edicao").css("opacity", 1);
    $(".btn-editar").hide();
    this.modoEdicao = true;
  }

  cancelarEdicao():void {
    this.infoPerfil = JSON.parse(sessionStorage.getItem('backupInfoPerfil'));
    sessionStorage.removeItem('backupInfoPerfil');
    $(".btn-editar").show();
    this.modoEdicao = false;
  }

  irParaSaibaMais():void {
    $('html, body').animate({
      scrollTop: $(".saiba-mais").offset().top - 130
    }, 500);
  }

  irParaMeusProdutos():void {
    $('html, body').animate({
      scrollTop: $("app-produtos-perfil-artesao").offset().top - 130
    }, 500);
  }
 
  constructor(private userDataHandler:UserDataHandlerService,
              private requestService:RequestService,
              private authService:AuthenticationService,
              private router:Router) { }

  ngOnInit() {
    // if (!this.authService.isLogged()){
      // this.router.navigate(['/']);
      console.log('fora', sessionStorage.getItem('artisanProfileUsername'));
      console.log('dentro', this.urlPerfil);
      if (sessionStorage.getItem('userType')) {
        this.userType = sessionStorage.getItem('userType');
        if (this.userType = 'artesao') {
          this.urlProdutos = this.requestService.serverBaseUrl + "/produtos/" + sessionStorage.getItem('userId');
        }
      } else {
        this.userType = null;
      }
      if (sessionStorage.getItem('artisanProfileUsername') !== null){
        this.urlPerfil = this.requestService.serverBaseUrl + "/artesao/" + sessionStorage.getItem('artisanProfileUsername');
        this.urlProdutos = this.requestService.serverBaseUrl + "/produtos/" + sessionStorage.getItem('artisanProfileId');
      }
    // } else {
      this.requestDadosPerfil();
    // }
  }

}
