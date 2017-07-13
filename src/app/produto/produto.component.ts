import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { TelaPrincipalCienteService } from './../tela-principal-cliente/tela-principal-cliente.service';
import { RequestService } from './../services/request.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  
  @Input() produto;

  serverBaseImageUrl = this.requestService.serverBaseImageUrl;

  private status = 'adicionar';

  constructor(private clientService:TelaPrincipalCienteService,
              private requestService:RequestService,
              private router:Router) { }

  addToCart(produto){
    // console.log(produto);
    this.clientService.addToCart(produto);
    this.status = 'adicionado';
  }

  checkStatus(){
    if (this.clientService.check(this.produto)) {
      this.status = 'adicionado';
    }
  }

  goToProductPage(id, aid){
    sessionStorage.setItem('productDetailId', id);
    sessionStorage.setItem('productDetailAid', aid);
    this.router.navigate(['/detalhe_produto']);
  }

  ngOnInit() {
    this.checkStatus();
    // console.log(this.produto);
  }

}
