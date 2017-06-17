import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal-cliente',
  templateUrl: './tela-principal-cliente.component.html',
  styleUrls: ['./tela-principal-cliente.component.css']
})
export class TelaPrincipalClienteComponent implements OnInit {

  constructor(private router:Router) { }

  isLogged = sessionStorage.getItem('isUserLogged');
  userType = sessionStorage.getItem('userType');

  ngOnInit() {
  	if (!this.isLogged || this.userType !== 'cliente'){
      this.router.navigate(['/']);
    }
  }

}
