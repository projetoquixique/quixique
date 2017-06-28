import { TelaPrincipalCienteService } from './tela-principal-cliente/tela-principal-cliente.service';
import { Routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { PageStartComponent } from './page-start/page-start.component';
import { CarrosselComponent } from './page-start/carrossel/carrossel.component';
import { FormCadastroStartComponent } from './page-start/form-cadastro-start/form-cadastro-start.component';
import { NavbarStartComponent } from './page-start/navbar-start/navbar-start.component';
import { CategoriesComponent } from './page-start/categories/categories.component';
import { FooterComponent } from './page-start/footer/footer.component';
import { CardPedidoGrandeComponent } from './card-pedido-grande/card-pedido-grande.component'
import { TelaPrincipalArtesaoComponent } from './tela-principal-artesao/tela-principal-artesao.component';
import { CardPedidoPequenoComponent } from './card-pedido-pequeno/card-pedido-pequeno.component';
import { MensagemErroInputComponent } from './mensagem-erro-input/mensagem-erro-input.component';
import { TermosConfirmacaoComponent } from './termos-confirmacao/termos-confirmacao.component';

import { RequestService } from './services/request.service';
import { UserDataHandlerService } from './services/user-data-handler.service';
import { AuthenticationService } from './services/authentication.service';

import { NavbarClienteComponent } from './navbar-cliente/navbar-cliente.component';
import { TelaPrincipalClienteComponent } from './tela-principal-cliente/tela-principal-cliente.component';
import { CategoryThumbnailComponent } from './page-start/categories/category-thumbnail/category-thumbnail.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProdutosNovidadesComponent } from './produtos-novidades/produtos-novidades.component';
import { ProdutosDestaquesComponent } from './produtos-destaques/produtos-destaques.component';
import { ProdutosOfertasComponent } from './produtos-ofertas/produtos-ofertas.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FormCadastroComponent,
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
    NavbarClienteComponent,
    TelaPrincipalClienteComponent,
    FormCadastroStartComponent,
    CategoryThumbnailComponent,
    ProdutosComponent,
    ProdutoComponent,
    TimelineComponent,
    ProdutosNovidadesComponent,
    ProdutosDestaquesComponent,
    ProdutosOfertasComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    TextMaskModule
  ],
  providers: [
    RequestService,
    UserDataHandlerService,
    AuthenticationService,
    TelaPrincipalCienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
