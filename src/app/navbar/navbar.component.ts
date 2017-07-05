import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MensagemErroInputComponent } from './../mensagem-erro-input/mensagem-erro-input.component';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

	// userName = localStorage.getItem('currentUserName');
  idArtesao = localStorage.getItem('userId');

  logout() {
    if (this.authService.logout()){
      this.router.navigate(['/']);
    }
  }

  constructor(private authService:AuthenticationService,
              private router:Router) { }

  ngOnInit() {
  }

}
