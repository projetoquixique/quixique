import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MensagemErroInputComponent } from './../mensagem-erro-input/mensagem-erro-input.component';

import { AuthenticationService } from './../services/authentication.service';

// import { UserDataHandlerService } from './../services/user-data-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  // public urlLoja:string = this.requestService.serverBaseUrl + "/artesao/" + sessionStorage.getItem('username') + "/loja";
  // public idArtesao:string = sessionStorage.getItem('userId');

  logout() {
    if (this.authService.logout()){
      this.router.navigate(['/']);
    }
  }

  constructor(private authService:AuthenticationService,
              // private requestService:RequestService,
              // private userDataHandler:UserDataHandlerService,
              private router:Router) { }

  ngOnInit() {
  }

}
