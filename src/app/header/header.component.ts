import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';
import { RequestService } from './../services/request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthenticationService,
              private router:Router,
              private requestService:RequestService) { }

  private userNameSurname;
  private profilePicture;

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
    this.userNameSurname = sessionStorage.getItem('name');
    if (sessionStorage.getItem('profilePicture') !== "undefined") {
      this.profilePicture = this.requestService.serverBaseImageUrl + '/imagens-perfis/' + sessionStorage.getItem('profilePicture');
    } else {
      this.profilePicture = "https://www.workplaceleadership.com.au/app/themes/cwl/assets/img/regular_res/default-user.png";
    }

  }
}
