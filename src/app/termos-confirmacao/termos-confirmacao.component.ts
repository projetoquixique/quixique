import { Component, OnInit, NgModule } from '@angular/core';
import { MensagemErroInputComponent } from './../mensagem-erro-input/mensagem-erro-input.component';

import { RequestService } from './../services/request.service';
import { UserDataHandlerService } from './../services/user-data-handler.service';

@Component({
  selector: 'app-termos-confirmacao',
  templateUrl: './termos-confirmacao.component.html',
  styleUrls: ['./termos-confirmacao.component.css'],
})

export class TermosConfirmacaoComponent implements OnInit {
  constructor(private requestService:RequestService,
              private userDataHandler:UserDataHandlerService) { }

  userType = this.userDataHandler.newUserData.tipo;
  userMail = this.userDataHandler.newUserData.email;

  confirmacaoTermos:boolean = null;
  cadastroFinalizado:boolean = false;
  formSubmitted:boolean = false;
  sendButtonText:string = "Concluir cadastro";

  confirmaTermos(){
    this.confirmacaoTermos = !this.confirmacaoTermos;
  };

  urlPost;
  cadastrar() {
    this.formSubmitted = true;
    this.sendButtonText = "Enviando...";
    if (this.confirmacaoTermos){
      if (this.userType == "artesao") {
        this.urlPost = "http://localhost:3000/api/artesaos";
      } else if (this.userType == "cliente") {
        this.urlPost = "http://localhost:3000/api/clientes";
      } 
      this.requestService.post(this.urlPost, this.userDataHandler.newUserData).subscribe(
        data => this.cadastroFinalizado = true,
        error => this.mostrarAlerta(error)
      );
      sessionStorage.removeItem('tipoUsuario');
    } else {
      this.confirmacaoTermos = false;
      this.sendButtonText = "Concluir cadastro";
    };
  };

  mensagemErro = "Não foi possível realizar seu cadastro. "
  mostrarAlerta(erro) {
    if (erro.constructor !== Array){
      alert(erro);
    } else {
      if (erro.indexOf("email") !== -1) {
        this.mensagemErro += "O e-mail escolhido já está sendo utilizado. ";
      };
      if (erro.indexOf("cpf") !== -1) {
        this.mensagemErro += "O CPF escolhido já está sendo utilizado. ";
      };
      if (erro.indexOf("nomeDeUsuario") !== -1) {
        this.mensagemErro += "O nome de usuário escolhido já está sendo utilizado. ";
      };
      this.mensagemErro += "Por favor, verifique essas informações e tente novamente.";
      alert(this.mensagemErro);
    }
  }

  ngOnInit() { };

}
