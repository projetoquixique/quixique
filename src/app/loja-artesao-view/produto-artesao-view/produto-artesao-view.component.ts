import { Component, OnInit, Input } from '@angular/core';
import { LojaArtesaoViewServiceService } from './../loja-artesao-view-service.service';
import { LojaArtesaoViewComponent } from './../loja-artesao-view.component';
import { Produto } from './produto.model';

@Component({
  selector: 'app-produto-artesao-view',
  templateUrl: './produto-artesao-view.component.html',
  styleUrls: ['./produto-artesao-view.component.css']
})
export class ProdutoArtesaoViewComponent implements OnInit {
  
  @Input() produto;

  constructor(public servico: LojaArtesaoViewServiceService) { }

  ngOnInit() {
  }

  public produtoSelecionado:Produto=null;

  pegarDadosProduto(produto){
    console.log(produto);
    this.servico.selecionarProduto(produto);
  };

  showVerPecas(){
    this.servico.showVerPecas()
  }
}
