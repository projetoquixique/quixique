import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-navbar-start',
  templateUrl: './navbar-start.component.html',
  styleUrls: ['./navbar-start.component.css']
})

export class NavbarStartComponent implements OnInit {

  constructor(private authService:AuthenticationService,
              private router:Router) {}

  cadastrarCliente(){
  	sessionStorage.setItem('tipoUsuario','cliente');
  };

  cadastrarArtesao(){
  	sessionStorage.setItem('tipoUsuario','artesao');
  };

  loginData = {email:{value:undefined, state:null, message:""}, password:{value:undefined, state:null, message:""}};
  loading = false;
  loginButtonText = "Entrar";

  verificaEmail(){
    if (!(/\S/.test(this.loginData.email.value)) || this.loginData.email.value == undefined){
      this.loginData.email.state = false;
      this.loginData.email.message = "Insira o email";
    } else if (!(/\S+@\S+\.\S+/.test(this.loginData.email.value))){
      this.loginData.email.state = false;
      this.loginData.email.message = "Email inválido";
    } else {
      this.loginData.email.state = true;
    };
  };

  verificaSenha(){
    if (this.loginData.password.value !== undefined){
      if (!(/\S/.test(this.loginData.password.value))){
        this.loginData.password.state = false;
        this.loginData.password.message = "Insira a senha";
      } else if (this.loginData.password.value.length < 6) {
        this.loginData.password.state = false;
        this.loginData.password.message = "Insira a senha completa";
      } else {
        this.loginData.password.state = true;
      };
    } else {
      this.loginData.password.state = false;
      this.loginData.password.message = "Insira a senha";
    };
  };

  login(){
    this.verificaEmail();
    this.verificaSenha();
    if (this.loginData.email.state && this.loginData.password.state){
      this.loading = true;
      this.loginButtonText = "Entrando..."
      this.authService.login(this.loginData.email.value, this.loginData.password.value)
            .subscribe(
                data => {
                  this.loading = false;
                  this.loginButtonText = "Entrar";
                  if (data == "notFound"){
                    this.loginData.email.state = false;
                    this.loginData.email.message = "E-mail não cadastrado";
                  } else if (data == "wrongPassword"){
                    this.loginData.password.state = false;
                    this.loginData.password.message = "Senha incorreta";
                  } else {
                    if (data.tipo == "artesao"){
                      this.router.navigate(['/tela_principal_artesao']);
                    } else {
                      alert("Cliente logado: redirecionar");
                    }
                  }
                },
                error => {
                  this.loading = false;
                  this.loginButtonText = "Entrar";
            });
    };
  };

  ngOnInit() {
  }

}
