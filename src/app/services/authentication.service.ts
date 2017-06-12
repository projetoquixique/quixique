import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http:Http){}

  private currentUser = null;
  
  login (email, password) {
    return this.http.get('http://rest.learncode.academy/api/quixique/cadastro',)
        .map((response: Response) => {
          let usersData = response.json();
            for (let user in usersData){
              if (usersData[user].email == email){
                if (usersData[user].senha == password){
                  this.currentUser = usersData[user];
                  return usersData[user];
                } else {
                  return "wrongPassword"
                };
              };
            };
            return "notFound" 
        });
    }
 
    logout() {
      this.currentUser = null;
        // remove user from local storage to log user out
        // localStorage.removeItem('currentUser');
    }
  

  isLogged(){
    if (this.currentUser) {
      return true;
    } else {
      return false;
    }
  };
}
