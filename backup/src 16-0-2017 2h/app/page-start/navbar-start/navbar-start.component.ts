import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-start',
  templateUrl: './navbar-start.component.html',
  styleUrls: ['./navbar-start.component.css']
})

export class NavbarStartComponent implements OnInit {

  constructor() { }

  cadastrarCliente(){
    // alert('teste');
    sessionStorage.setItem('tipoUsuario','cliente');
  };

  cadastrarArtesao(){
    // alert('teste2');
    sessionStorage.setItem('tipoUsuario','artesao');
  };

  ngOnInit() {
  }

}
