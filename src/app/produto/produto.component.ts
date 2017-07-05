import { TelaPrincipalCienteService } from './../tela-principal-cliente/tela-principal-cliente.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  
  @Input() produto;

  private status = 'adicionar';

  constructor(private clientService:TelaPrincipalCienteService) { }

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

  ngOnInit() {
    this.checkStatus();
  }

}
