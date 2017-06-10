import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-start',
  templateUrl: './navbar-start.component.html',
  styleUrls: ['./navbar-start.component.css']
})

export class NavbarStartComponent implements OnInit {

  constructor() { }

  cadastrarCliente(){
  	sessionStorage.setItem('tipoUsuario','cliente');
  };

  cadastrarArtesao(){
  	sessionStorage.setItem('tipoUsuario','artesao');
  };
  ngOnInit() {
  }

}
