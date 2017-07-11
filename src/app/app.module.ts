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
import { LojaArtesaoViewServiceService } from './loja-artesao-view/loja-artesao-view-service.service';
import { TelaPrincipalArtesaoServiceService } from './tela-principal-artesao/tela-principal-artesao-service.service';

import { NavbarClienteComponent } from './navbar-cliente/navbar-cliente.component';
import { TelaPrincipalClienteComponent } from './tela-principal-cliente/tela-principal-cliente.component';
import { CategoryThumbnailComponent } from './page-start/categories/category-thumbnail/category-thumbnail.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PerfilArtesaoComponent } from './perfil-artesao/perfil-artesao.component';
import { CapaApresentacaoComponent } from './perfil-artesao/capa-apresentacao/capa-apresentacao.component';
import { ProdutosNovidadesComponent } from './produtos-novidades/produtos-novidades.component';
import { ProdutosDestaquesComponent } from './produtos-destaques/produtos-destaques.component';
import { ProdutosOfertasComponent } from './produtos-ofertas/produtos-ofertas.component';
import { ProdutosPerfilArtesaoComponent } from './produtos-perfil-artesao/produtos-perfil-artesao.component';
import { PortfolioProcessosViewerComponent } from './portfolio-processos-viewer/portfolio-processos-viewer.component';
import { PageCarrinhoComponent } from './page-carrinho/page-carrinho.component';
import { LojaArtesaoViewComponent } from './loja-artesao-view/loja-artesao-view.component';
import { ProdutoArtesaoViewComponent } from './loja-artesao-view/produto-artesao-view/produto-artesao-view.component';
import { InserirProdutoComponent } from './loja-artesao-view/inserir-produto/inserir-produto.component';
import { VerPecaComponent } from './loja-artesao-view/ver-peca/ver-peca.component';

import { FileSelectDirective } from 'ng2-file-upload';
import { InfograficoComponent } from './page-start/infografico/infografico.component';
import { HistoricoArtesaoComponent } from './tela-principal-artesao/historico-artesao/historico-artesao.component';
import { ContadorCaracteresComponent } from './contador-caracteres/contador-caracteres.component';

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
    DetalheProdutoComponent,
    ProdutosComponent,
    ProdutoComponent,
    TimelineComponent,
    PerfilArtesaoComponent,
    CapaApresentacaoComponent,
    ProdutosNovidadesComponent,
    ProdutosDestaquesComponent,
    ProdutosOfertasComponent,
    ProdutosPerfilArtesaoComponent,
    PortfolioProcessosViewerComponent,
    PageCarrinhoComponent,
    LojaArtesaoViewComponent,
    ProdutoArtesaoViewComponent,
    InserirProdutoComponent,
    VerPecaComponent,
    FileSelectDirective,
    InfograficoComponent,
    HistoricoArtesaoComponent,
    ContadorCaracteresComponent
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
    TelaPrincipalCienteService,
    LojaArtesaoViewServiceService,
    TelaPrincipalArtesaoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
