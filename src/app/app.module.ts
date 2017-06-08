import { Routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormCadastro1Component } from './form-cadastro-1/form-cadastro-1.component';
import { MensagemErroInputComponent } from './mensagem-erro-input/mensagem-erro-input.component';
import { TermosConfirmacaoComponent } from './termos-confirmacao/termos-confirmacao.component'

import { RequestService } from './services/request.service';
import { UserDataHandlerService } from './services/user-data-handler.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FormCadastro1Component,
    MensagemErroInputComponent,
    TermosConfirmacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [
    RequestService,
    UserDataHandlerService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
