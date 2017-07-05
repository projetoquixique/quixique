import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router) { }

  userName = sessionStorage.getItem('currentUserName');

  logout() {
    if (this.authService.logout()){
      this.router.navigate(['/']);
    }
  }
  
  isLogged() {
    if (!this.authService.isLogged()){
      this.router.navigate(['/']);
    }
  }

  checkLogged() {
    return this.authService.isLogged();
  }

  ngOnInit() {
  }

}
