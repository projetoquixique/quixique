import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-tela-principal-cliente',
  templateUrl: './tela-principal-cliente.component.html',
  styleUrls: ['./tela-principal-cliente.component.css']
})
export class TelaPrincipalClienteComponent implements OnInit {

  constructor(private router:Router,
              private authService:AuthenticationService) { }

  ngOnInit() {
  	if (!this.authService.isLogged() || sessionStorage.getItem('userType') !== 'cliente'){
      this.router.navigate(['/']);
    }
  }

}
