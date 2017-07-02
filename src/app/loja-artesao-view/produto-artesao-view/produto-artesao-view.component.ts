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
  // public nome: string = "";
  // getNome(){
  //   return this.nome;
  // };
  // public descricao: string = "";
  // public unidades: string = "";
  // public preco: string = "";

  public produtoSelecionado:Produto=null;

  // pegarDados(imagem, nome, descricao, unidades, preco){
    // console.log(imagem);
    // this.servico.receberDados(imagem, nome, descricao, unidades, preco);
    // console.log(dimensoes, categoria)
  // }
  pegarDadosProduto(produto){
    // this.produtoSelecionado = produto;
    console.log(produto);
    this.servico.selecionarProduto(produto);
  }
}
