import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from "@angular/router";
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { TelaPrincipalArtesaoComponent } from './tela-principal-artesao/tela-principal-artesao.component';
import { TelaPrincipalClienteComponent } from './tela-principal-cliente/tela-principal-cliente.component';
import { PageStartComponent } from './page-start/page-start.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

const APP_ROUTES: Routes = [
    {path:"", redirectTo:"/inicio", pathMatch:"full"},
    {path:"inicio", component:PageStartComponent},
    {path:"cadastro", component:FormCadastroComponent},
    {path:"tela_principal_artesao", component:TelaPrincipalArtesaoComponent},
    {path:"tela_principal_cliente", component:TelaPrincipalClienteComponent},
    {path:"detalhe_produto", component:DetalheProdutoComponent}
]

export const Routing = RouterModule.forRoot(APP_ROUTES);

