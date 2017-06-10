import { Injectable } from '@angular/core';
import { RequestService } from './../services/request.service';

@Injectable()
export class AuthenticationService {
  constructor(private requestService:RequestService){}

  private data = [];
  private isUserLogged:boolean = false;

  getReady(){
    this.requestService.get('http://rest.learncode.academy/api/quixique/cadastro').subscribe(
      data => this.data = data,
      error => console.log(error)
    );
  };

  login(email, senha){
    this.getReady();
    for (let user in this.data){
      if (this.data[user].email == email){
        if (this.data[user].senha == senha){
          this.isUserLogged = true;
          return this.data[user];
        } else {
          return "wrongPassword";
        };
      };
    };
    return "notFound";
  };

  isLogged(){
    return this.isUserLogged;
  };
}
