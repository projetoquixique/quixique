import { Component, OnInit } from '@angular/core';
import { TelaPrincipalCienteService } from './../tela-principal-cliente/tela-principal-cliente.service';

@Component({
  selector: 'app-page-carrinho',
  templateUrl: './page-carrinho.component.html',
  styleUrls: ['./page-carrinho.component.css']
})


export class PageCarrinhoComponent implements OnInit {
  
  public page = 0;
  
  title:string = "Carrinho de compras";

  next(){
    this.page += 1;
  }
  
  constructor(private clientService:TelaPrincipalCienteService) { }

  ngOnInit() {
    this.clientService.start();
  }

}
