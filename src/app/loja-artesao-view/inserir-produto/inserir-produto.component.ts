import { Component, OnInit } from '@angular/core';
import { ProdutoArtesaoViewComponent } from './../produto-artesao-view/produto-artesao-view.component';
import { LojaArtesaoViewServiceService } from './../loja-artesao-view-service.service';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.css']
  // providers: [LojaArtesaoViewServiceService]
})
export class InserirProdutoComponent implements OnInit {

  constructor(public servico: LojaArtesaoViewServiceService) { }
  
  // public produtoView: ProdutoArtesaoViewComponent;

  public nome: string = this.servico.getNome();
  ngOnInit() {
  }

}
