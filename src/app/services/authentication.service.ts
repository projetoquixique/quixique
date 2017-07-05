import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http:Http){}

  urlLogin = "http://localhost:3000/api/entrar";
  
  login (loginData) {
    // return this.http.get('http://rest.learncode.academy/api/quixique/cadastro',)
    //     .map((response: Response) => {
    //       let usersData = response.json();
    //         for (let user in usersData){
    //           if (usersData[user].email == email){
    //             if (usersData[user].senha == password){
    //               this.currentUser = usersData[user];
    //               this.toSessionStorage(usersData[user]);
    //               return usersData[user];
    //             } else {
    //               return "wrongPassword"
    //             };
    //           };
    //         };
    //         return "notFound" 
    //     });
    return this.http.post(this.urlLogin, loginData)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error));
  }

  logout() {
    localStorage.clear();
    return true;
  }

  isLogged(){
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  };

  postLoginActions(userData){
    localStorage.setItem('token', userData.token);
    localStorage.setItem('userType', userData.tipo);
    localStorage.setItem('userId', userData.userId);
    localStorage.setItem('username', userData.nomeDeUsuario);
    localStorage.setItem('name', userData.nome.replace(/(([^\s]+\s\s*){2})(.*)/,"$1"));
  };
}
