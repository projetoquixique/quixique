import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MensagemErroInputComponent } from './../mensagem-erro-input/mensagem-erro-input.component';

import { AuthenticationService } from './../services/authentication.service';
import { RequestService } from './../services/request.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

	public urlPerfil:string = this.requestService.serverBaseUrl + "/artesao/" + sessionStorage.getItem('username');
  public urlLoja:string = this.requestService.serverBaseUrl + "/artesao/" + sessionStorage.getItem('username') + "/loja";
  // public idArtesao:string = localStorage.getItem('userId');

  logout() {
    if (this.authService.logout()){
      this.router.navigate(['/']);
    }
  }

  constructor(private authService:AuthenticationService,
              private requestService:RequestService,
              private router:Router) { }

  ngOnInit() {
  }

}
