import { Injectable } from '@angular/core';
import { RequestService } from './../services/request.service';


@Injectable()
export class AuthenticationService {
	constructor(private requestService:RequestService){
		this.requestService.get('http://rest.learncode.academy/api/quixique/cadastro').subscribe(
	      data => this.data = data,
	      error => console.log(error)
	    );
	}
  data = [];
	entrar(email, senha){
    	for (let user in this.data){
    		if (this.data[user].email == email){
    			if (this.data[user].senha == senha){
						if (this.data[user].tipo == "artesao"){
							return "ok_artesao";
						} else {
							return "ok_cliente";
						}
    			} else {
    				return "wrongPassword";
    			}
    		}
    	}
    	return "notFound";
	};
}
