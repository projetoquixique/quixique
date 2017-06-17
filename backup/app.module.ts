import { Routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { PageStartComponent } from './page-start/page-start.component';
import { CarrosselComponent } from './page-start/carrossel/carrossel.component';
import { NavbarStartComponent } from './page-start/navbar-start/navbar-start.component';
import { CategoriesComponent } from './page-start/categories/categories.component';
import { FooterComponent } from './page-start/footer/footer.component';
=======
import { FormCadastro1Component } from './form-cadastro-1/form-cadastro-1.component';

import { CadastroService } from './form-cadastro-1/form-cadastro-1.service'
>>>>>>> origin/macelo

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
<<<<<<< HEAD
    PageStartComponent,
    CarrosselComponent,
    NavbarStartComponent,
    CategoriesComponent,
    FooterComponent
=======
    FormCadastro1Component
>>>>>>> origin/macelo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
