import { Routes, RouterModule } from "@angular/router";
import { FormCadastro1Component } from './form-cadastro-1/form-cadastro-1.component';

const APP_ROUTES: Routes = [
    {path:"", redirectTo:"/", pathMatch:"full"},
    {path:"cadastro", component:FormCadastro1Component},
]

export const Routing = RouterModule.forRoot(APP_ROUTES);