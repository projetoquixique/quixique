import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MensagemErroInputComponent } from './../mensagem-erro-input/mensagem-erro-input.component';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private router:Router,
              private authService:AuthenticationService) { }

  cadastrarUsuario(){
    sessionStorage.setItem('tipoUsuario','cliente');
  };

  cadastrarArtesao(){
    sessionStorage.setItem('tipoUsuario','artesao');
  };

  dadosLogin = {email:{valor:undefined, estado:null, mensagem:""}, senha:{valor:undefined, estado:null, mensagem:""}};

  verificaEmail(){
    if (!(/\S/.test(this.dadosLogin.email.valor)) || this.dadosLogin.email.valor == undefined){
      this.dadosLogin.email.estado = false;
      this.dadosLogin.email.mensagem = "Insira o email";
    } else if (!(/\S+@\S+\.\S+/.test(this.dadosLogin.email.valor))){
      this.dadosLogin.email.estado = false;
      this.dadosLogin.email.mensagem = "Email inválido";
    } else {
      this.dadosLogin.email.estado = true;
    };
  };

  verificaSenha(){
    if (this.dadosLogin.senha.valor !== undefined){
      if (!(/\S/.test(this.dadosLogin.senha.valor))){
        this.dadosLogin.senha.estado = false;
        this.dadosLogin.senha.mensagem = "Insira a senha";
      } else if (this.dadosLogin.senha.valor.length < 6) {
        this.dadosLogin.senha.estado = false;
        this.dadosLogin.senha.mensagem = "Insira a senha completa";
      } else {
        this.dadosLogin.senha.estado = true;
      };
    } else {
      this.dadosLogin.senha.estado = false;
      this.dadosLogin.senha.mensagem = "Insira a senha";
    };
  };

  entrar(){
    this.verificaEmail();
    this.verificaSenha();
    if (this.dadosLogin.email.estado && this.dadosLogin.senha.estado){
      let loginAttempt = this.authService.login(this.dadosLogin.email.valor, this.dadosLogin.senha.valor);
      if (loginAttempt == "notFound"){
        this.dadosLogin.email.estado = false;
        this.dadosLogin.email.mensagem = "E-mail não cadastrado";
      } else if (loginAttempt == "wrongPassword"){
        this.dadosLogin.senha.estado = false;
        this.dadosLogin.senha.mensagem = "Senha incorreta";
      } else {
        alert(loginAttempt.tipo)
      }
    };
  };

  ngOnInit() {
    this.authService.getReady();
  }

}
