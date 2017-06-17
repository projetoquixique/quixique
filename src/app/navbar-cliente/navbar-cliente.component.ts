import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.css']
})
export class NavbarClienteComponent implements OnInit {

  userName = sessionStorage.getItem('currentUserName');

  constructor(private authService:AuthenticationService,
              private router:Router) { }

  logout() {
    if (this.authService.logout()){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

}
