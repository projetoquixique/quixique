import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-form-cadastro-start',
  templateUrl: './form-cadastro-start.component.html',
  styleUrls: ['./form-cadastro-start.component.css']
})
export class FormCadastroStartComponent implements OnInit {

  @Output() closeForm = new EventEmitter<string>();

  close(str){
    // alert(str);
    this.closeForm.emit(str);
  }

  cadastrarUsuario(user, data){
    // alert(user);
  	sessionStorage.setItem('tipoUsuario',user);
  };

  guardarDados(data){
    if(data){
      data = JSON.stringify(data);
  	  sessionStorage.setItem('userData',data);
    }
  }

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

  // login(){
  //   this.verificaEmail();
  //   this.verificaSenha();
  //   if (this.loginData.email.state && this.loginData.password.state){
  //     this.loading = true;
  //     this.loginButtonText = "Entrando..."
  //     this.authService.login(this.loginData.email.value, this.loginData.password.value)
  //           .subscribe(
  //               data => {
  //                 this.loading = false;
  //                 this.loginButtonText = "Entrar";
  //                 if (data == "notFound"){
  //                   this.loginData.email.state = false;
  //                   this.loginData.email.message = "E-mail não cadastrado";
  //                 } else if (data == "wrongPassword"){
  //                   this.loginData.password.state = false;
  //                   this.loginData.password.message = "Senha incorreta";
  //                 } else {
  //                   if (data.tipo == "artesao"){
  //                     this.router.navigate(['/tela_principal_artesao']);
  //                   } else {
  //                     this.router.navigate(['/tela_principal_cliente']);
  //                   }
  //                 }
  //               },
  //               error => {
  //                 this.loading = false;
  //                 this.loginButtonText = "Entrar";
  //           });
  //   };
  // };

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

}
