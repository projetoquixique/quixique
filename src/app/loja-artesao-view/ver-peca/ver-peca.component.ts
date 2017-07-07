import { Produto } from './../produto-artesao-view/produto.model';
import { Component, OnInit } from '@angular/core';
import { LojaArtesaoViewServiceService } from './../loja-artesao-view-service.service';

@Component({
  selector: 'app-ver-peca',
  templateUrl: './ver-peca.component.html',
  styleUrls: ['./ver-peca.component.css']
})
export class VerPecaComponent implements OnInit {

  constructor(public servico: LojaArtesaoViewServiceService) { }

  ngOnInit() {
  }
  
  // public produtos:Produto[] = null;

  _id;
  pic;
  nomeProduto:string = this.servico.getNome();
  descricaoProduto:string = this.servico.getDescricao();
  precoProduto:number = this.servico.getPreco();
  dimensoesProduto = [];
  estoqueProduto:number = this.servico.getEstoque();
  categoriaProduto:string = this.servico.getCategoria();
  larguraProduto:number = this.servico.getDimensoes()[0][0];
  alturaProduto:number = this.servico.getDimensoes()[0][1];
  expessuraProduto:number = this.servico.getDimensoes()[0][2];

  showEdit:boolean = false;

  // idClicado;

  editar(){
    this.showEdit = true;
    console.log(this.nomeProduto);
  }

  salvarEdit(){
    let produto = new Produto(this._id, this.pic, this.nomeProduto, this.descricaoProduto, this.precoProduto, this.dimensoesProduto, this.categoriaProduto, this.estoqueProduto);
    this.servico.editarProduto(produto).subscribe(
      data => {console.log(data)},
      error => console.log(error)
    );
  }

  cancelarEdit(){
    this.showEdit = false;
  }

}
