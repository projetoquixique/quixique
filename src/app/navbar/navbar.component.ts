import { Component, OnInit } from '@angular/core';

import { MensagemErroInputComponent } from './../mensagem-erro-input/mensagem-erro-input.component';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

}
