import { Component, OnInit } from '@angular/core';
import { TelaPrincipalCienteService } from './../tela-principal-cliente/tela-principal-cliente.service';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-page-carrinho',
  templateUrl: './page-carrinho.component.html',
  styleUrls: ['./page-carrinho.component.css']
})


export class PageCarrinhoComponent implements OnInit {
  
  public page = 0;
  
  title1:string = "Carrinho de compras";
  title2:string = "Confirmar endereço de entrega";

  cepMask = [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  logged = null;

  next(){
    this.page += 1;
  }
  
  constructor(private clientService:TelaPrincipalCienteService, private auth:AuthenticationService) { }

  ngOnInit() {
    this.clientService.start();
    this.logged = this.auth.isLogged();
  }

}
