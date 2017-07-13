import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestService } from './../services/request.service';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.css']
})

export class ProdutosCategoriaComponent implements OnInit {

  constructor(private router:Router,
  			      private requestService:RequestService,
              private authService:AuthenticationService) { }

  public produtos = [];
  public categoria;
  public isLogged = this.authService.isLogged();

  ngOnInit() {
    window.scrollTo(0, 0);
  	if (sessionStorage.getItem('categorySearch')) {
  		this.requestService.get(this.requestService.serverBaseUrl + '/produtos/categoria?categoria=' + sessionStorage.getItem('categorySearch')).subscribe(
	      data => {
	        this.produtos = data;
          this.categoria = sessionStorage.getItem('categorySearch');
	        // sessionStorage.removeItem('categorySearch');
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
