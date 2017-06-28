import { Component, OnInit, Input } from '@angular/core';
import { LojaArtesaoViewServiceService } from './../loja-artesao-view-service.service';

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
  pegarDados(nome, descricao, unidades, preco){
    // this.nome = nome;
    // this.descricao = descricao;
    // this.unidades = unidades;
    // this.preco = preco;
    // console.log(this.nome,this.descricao, this.unidades, this.preco);
    this.servico.receberDados(nome, descricao, unidades, preco);
  }
}
