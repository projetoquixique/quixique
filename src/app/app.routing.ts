import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from "@angular/router";
import { FormCadastro1Component } from './form-cadastro-1/form-cadastro-1.component';
import { PageStartComponent } from './page-start/page-start.component';

const APP_ROUTES: Routes = [
    {path:"", redirectTo:"/inicio", pathMatch:"full"},
    {path:"inicio", component: PageStartComponent},    
    {path:"cadastro_artesão", component: FormCadastro1Component},
]

export const Routing = RouterModule.forRoot(APP_ROUTES);