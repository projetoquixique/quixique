import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication.service';
import { UserDataHandlerService } from './../../services/user-data-handler.service';

@Component({
  selector: 'app-form-cadastro-start',
  host: {
    '(document:click)': 'handleClick($event)',
  },
  templateUrl: './form-cadastro-start.component.html',
  styleUrls: ['./form-cadastro-start.component.css']
})
export class FormCadastroStartComponent implements OnInit {

  @Output() closeForm = new EventEmitter<string>();

  close(str){
    // alert(str);
    // this.cadastroIniciado = false;
    this.closeForm.emit(str);
    if (str == 'close') {
      this.cadastroIniciado = false;
    }
  };

  tipoUsuario = null;
  mudarTipoUsuario(tipo){
    // alert(user);
    this.tipoUsuario = tipo;
  };

  cadastroIniciado = false;
  iniciarNovoCadastro(){
    if (!this.cadastroIniciado) {
      if (this.formData.email.value !== undefined || this.formData.password.value !== undefined) {
        this.verificaEmail();
        this.verificaSenha();
        if (this.formData.email.state && this.formData.password.state) {
          console.log('touched')
          this.cadastroIniciado = true;
        }
      } else {
        console.log('untouched')
        this.cadastroIniciado = true;
      }
    } else {
      this.userDataHandler.startSignUpFromStartPage(this.tipoUsuario, {email: this.formData.email.value, senha: this.formData.password.value});
      this.router.navigate(['/cadastro']);
    }
  };

  formData = {email:{value:undefined, state:null, message:""}, password:{value:undefined, state:null, message:""}};
  loading = false;
  loginButtonText = "Entrar";

  verificaEmail(){
    if (!(/\S/.test(this.formData.email.value)) || this.formData.email.value == undefined){
      this.formData.email.state = false;
      this.formData.email.message = "Insira o email";
    } else if (!(/\S+@\S+\.\S+/.test(this.formData.email.value))){
      this.formData.email.state = false;
      this.formData.email.message = "Email inválido";
    } else {
      this.formData.email.state = true;
    };
  };

  verificaSenha(){
    if (this.formData.password.value !== undefined){
      if (!(/\S/.test(this.formData.password.value))){
        this.formData.password.state = false;
        this.formData.password.message = "Insira a senha";
      } else if (this.formData.password.value.length < 6) {
        this.formData.password.state = false;
        this.formData.password.message = "Insira a senha completa";
      } else {
        this.formData.password.state = true;
      };
    } else {
      this.formData.password.state = false;
      this.formData.password.message = "Insira a senha";
    };
  };

  login() {
    this.verificaEmail();
    this.verificaSenha();
    if (this.formData.email.state && this.formData.password.state){
      this.loading = true;
      this.loginButtonText = "Entrando..."
      this.authService.login({email: this.formData.email.value, senha: this.formData.password.value})
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
  };

  handleClick(event){
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.cadastroIniciado = false;
    }
  }

  public elementRef;

  constructor(private authService:AuthenticationService,
              private userDataHandler:UserDataHandlerService,
              private router:Router,
              private myElement:ElementRef) {
                this.elementRef = myElement;
              }

  ngOnInit() {
  }

}
