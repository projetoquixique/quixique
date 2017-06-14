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
                  this.toSessionStorage(usersData[user]);
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
      sessionStorage.removeItem('isUserLogged');
      sessionStorage.removeItem('userType');
      sessionStorage.removeItem('currentUserName');
      // remove user from local storage to log user out
      return true;
    }

  isLogged(){
    if (this.currentUser) {
      return true;
    } else {
      return false;
    }
  };

  toSessionStorage(userData) {
    sessionStorage.setItem('isUserLogged','true');
    sessionStorage.setItem('userType', userData.tipo);
    sessionStorage.setItem('currentUserName', userData.nome.replace(/(([^\s]+\s\s*){2})(.*)/,"$1"));
  }
}
