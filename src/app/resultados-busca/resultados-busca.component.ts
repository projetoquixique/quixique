import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestService } from './../services/request.service';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-resultados-busca',
  templateUrl: './resultados-busca.component.html',
  styleUrls: ['./resultados-busca.component.css']
})
export class ResultadosBuscaComponent implements OnInit {

   constructor(private router:Router,
  			   private requestService:RequestService,
               private authService:AuthenticationService) { }

	  public produtos = [];
	  public busca;
	  public isLogged = this.authService.isLogged();

	  ngOnInit() {
	  	window.scrollTo(0, 0);
	  	if (sessionStorage.getItem('generalSearch')) {
	  		this.requestService.get(this.requestService.serverBaseUrl + '/produtos/busca?termo=' + sessionStorage.getItem('generalSearch')).subscribe(
		      	data => {
		        	this.produtos = data;
	          		this.busca = sessionStorage.getItem('generalSearch');
		        	sessionStorage.removeItem('generalSearch');
	  			  // console.log(this.produtos);
		      	},
		      	error => {
		        	console.log(error);
		      	});
	  	} else {
	  		this.router.navigate(['/']);
	  	}
	  }
}
