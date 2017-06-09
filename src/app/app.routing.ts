import { Routes, RouterModule } from "@angular/router";
import { FormCadastro1Component } from './form-cadastro-1/form-cadastro-1.component';
import { TelaPrincipalArtesaoComponent } from './tela-principal-artesao/tela-principal-artesao.component';

const APP_ROUTES: Routes = [
    {path:"", redirectTo:"/", pathMatch:"full"},
    {path:"cadastro_artesão", component:FormCadastro1Component},
    {path:"tela_principal_artesao", component:TelaPrincipalArtesaoComponent},
    {path:"cadastro", component:FormCadastro1Component},
]

export const Routing = RouterModule.forRoot(APP_ROUTES);
