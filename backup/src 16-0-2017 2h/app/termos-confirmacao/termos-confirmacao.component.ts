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

  confirmaTermos(){
    this.confirmacaoTermos = !this.confirmacaoTermos;
  };

  cadastrar() {
    this.formSubmitted = true;
    if (this.confirmacaoTermos){
      this.requestService.post("http://rest.learncode.academy/api/quixique/cadastro", this.userDataHandler.newUserData).subscribe(
        data => this.cadastroFinalizado = true,
        error => console.log(error)
      );
    } else {
      this.confirmacaoTermos = false;
    };
  };

  ngOnInit() { };

}
