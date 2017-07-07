import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserDataHandlerService } from './user-data-handler.service';
import { RequestService } from './request.service';

@Injectable()
export class AuthenticationService {
  constructor(private http:Http,
              private userDataHandler:UserDataHandlerService,
              private requestService:RequestService){}

  private urlLogin:string = this.requestService.serverBaseUrl + "/entrar";
  
  login (loginData) {
    return this.http.post(this.urlLogin, loginData)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error));
  }

  logout() {
    this.userDataHandler.closeCurrentSession();
    return true;
  }

  isLogged(){
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  };
}
