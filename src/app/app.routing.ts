import { Routes, RouterModule } from "@angular/router";
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { TelaPrincipalArtesaoComponent } from './tela-principal-artesao/tela-principal-artesao.component';

const APP_ROUTES: Routes = [
    {path:"", redirectTo:"/", pathMatch:"full"},
    {path:"cadastro", component:FormCadastroComponent},
    {path:"tela_principal_artesao", component:TelaPrincipalArtesaoComponent},
]

export const Routing = RouterModule.forRoot(APP_ROUTES);
