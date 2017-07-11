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
  artesao_id = sessionStorage.getItem('userId');
  pic = this.servico.getImagem();
  nomeProduto:string = this.servico.getNome();
  descricaoProduto:string = this.servico.getDescricao();
  precoProduto:number = this.servico.getPreco();
  dimensoesProduto:any = [];
  estoqueProduto:number = this.servico.getEstoque();
  categoriaProduto:string = this.servico.getCategoria();
  larguraProduto:number = this.servico.getDimensoes()[0];
  alturaProduto:number = this.servico.getDimensoes()[1];
  expessuraProduto:number = this.servico.getDimensoes()[2];
  

  showEdit:boolean = false;

  // idClicado;

  editar(){
    this.showEdit = true;
    // console.log(this.nomeProduto);
  }

  salvarEdit(){
    let artesao_id = sessionStorage.getItem('userId');     
    this.dimensoesProduto.push(this.larguraProduto, this.alturaProduto, this.expessuraProduto);
    let produto = new Produto(this._id, this.artesao_id, this.pic, this.nomeProduto, this.descricaoProduto, this.precoProduto, this.dimensoesProduto, this.categoriaProduto, this.estoqueProduto);
    this.servico.editarProduto(produto).subscribe(
      data => {console.log('data');
              this.showEdit = false;
            this.servico.getProdutosArtesao(artesao_id).subscribe(
              data => {console.log(data); console.log(this.servico.produtos.length);
                      if(this.servico.produtos.length==0){
                        this.servico.showZero = true;
                        this.servico.showVerPecas();                    
                      }},
              error => console.log(error)
            );
      },
      error => console.log(error)
    );
  }

  cancelarEdit(){
    this.showEdit = false;
  }

  abrirModalExc:boolean = false;

  abriModalDelete(){
    this.abrirModalExc = true;
  }


  deletarPeca(){
    let artesao_id = sessionStorage.getItem('userId'); 
    this.servico.deletarPeca().subscribe(
      data => {console.log('data');
        this.servico.getProdutosArtesao(artesao_id).subscribe(
          data => {console.log(data); console.log(this.servico.produtos.length);
                  if(this.servico.produtos.length==0){
                    this.servico.showZero = true;
                    this.servico.showVerPecas();                    
                  }},
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }
  fecharModalExc(){
    this.abrirModalExc = false;
  }

}
