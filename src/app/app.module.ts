import { Routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageStartComponent } from './page-start/page-start.component';
import { CarrosselComponent } from './page-start/carrossel/carrossel.component';
import { NavbarStartComponent } from './page-start/navbar-start/navbar-start.component';
import { CategoriesComponent } from './page-start/categories/categories.component';
import { FooterComponent } from './page-start/footer/footer.component';
import { FormCadastro1Component } from './form-cadastro-1/form-cadastro-1.component';
import { CardPedidoGrandeComponent } from './card-pedido-grande/card-pedido-grande.component'

// import { CadastroService } from './form-cadastro-1/form-cadastro-1.service';
import { TelaPrincipalArtesaoComponent } from './tela-principal-artesao/tela-principal-artesao.component';
import { CardPedidoPequenoComponent } from './card-pedido-pequeno/card-pedido-pequeno.component';
import { MensagemErroInputComponent } from './mensagem-erro-input/mensagem-erro-input.component';
import { TermosConfirmacaoComponent } from './termos-confirmacao/termos-confirmacao.component'

import { RequestService } from './services/request.service';
import { UserDataHandlerService } from './services/user-data-handler.service';
import { AuthenticationService } from './services/authentication.service';
import { CadastroService } from './form-cadastro-1/form-cadastro-1.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FormCadastro1Component,
    CardPedidoGrandeComponent,
    TelaPrincipalArtesaoComponent,
    CardPedidoPequenoComponent,
    MensagemErroInputComponent,
    TermosConfirmacaoComponent,
    PageStartComponent,
    CarrosselComponent,
    NavbarStartComponent,
    CategoriesComponent,
    FooterComponent,
    FormCadastro1Component
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
