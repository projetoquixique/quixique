import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication.service';
import { UserDataHandlerService } from './../../services/user-data-handler.service';

@Component({
  selector: 'app-navbar-start',
  templateUrl: './navbar-start.component.html',
  styleUrls: ['./navbar-start.component.css']
})

export class NavbarStartComponent implements OnInit {

  constructor(private authService:AuthenticationService,
              private userDataHandler:UserDataHandlerService,
              private router:Router) {}

  cadastrarCliente(){
    this.userDataHandler.startSignupFromNavbar('cliente');
  };

  cadastrarArtesao(){
    this.userDataHandler.startSignupFromNavbar('artesao');
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
      this.authService.login({email: this.loginData.email.value, senha: this.loginData.password.value})
                      .subscribe(
                        data => {
                          this.loading = false;
                          this.loginButtonText = "Entrar";
                          this.userDataHandler.newSession(data);
                          if (data.tipo == "artesao"){
                            this.router.navigate(['/tela_principal_artesao']);
                          } else {
                            this.router.navigate(['/tela_principal_cliente']);
                          }
                        },
                        error => {
                          alert("Login inválido. Verifique as informações e tente novamente.");
                          this.loading = false;
                          this.loginButtonText = "Entrar";
                        }
                       )
    };
  }

  public searchString;

  performSearch() {
    if (this.searchString.length !== 0) {
      sessionStorage.setItem('generalSearch', this.searchString);
      this.router.navigate(['/busca']);
    }
  }

  ngOnInit() {
  }

}
