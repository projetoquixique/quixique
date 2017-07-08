import { Component, OnInit } from '@angular/core';
import { ProdutoArtesaoViewComponent } from './../produto-artesao-view/produto-artesao-view.component';
import { LojaArtesaoViewServiceService } from './../loja-artesao-view-service.service';
import { Produto } from './../produto-artesao-view/produto.model';
import { FileUploader } from 'ng2-file-upload';


// var ng2_file_upload_1 = require("ng2-file-upload");
// const URL = '/api/';
const URL = 'http://localhost:3000/api/produtos/upload';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.css']
  // providers: [LojaArtesaoViewServiceService]
})
export class InserirProdutoComponent implements OnInit {
  
  public uploader:FileUploader = new FileUploader({url:URL});
  // public uploader = new ng2_file_upload_1.FileUploader({ url: URL });


  constructor(public servico: LojaArtesaoViewServiceService) { }
  
  // public produtoView: ProdutoArtesaoViewComponent;
  
  public nome: string = this.servico.getNome();

  public produtos:Produto[] = null;
  ngOnInit() {
  }
  
   _id = null;
   pic = null;
   nomeProduto:string;
   descricaoProduto:string;
   precoProduto:number;
   dimensoesProduto = [];
   categoriaProduto:string;
   estoqueProduto:number;

   larguraProduto;
   alturaProduto;
   expessuraProduto;
  
  // ver(up){
  //   console.log(up);
  // }

  inserirProduto(){
    this.dimensoesProduto.push(this.larguraProduto);
    this.dimensoesProduto.push(this.alturaProduto);
    this.dimensoesProduto.push(this.expessuraProduto);
    // var produto = new Produto(this._id, this.pic, this.nomeProduto, this.descricaoProduto, this.precoProduto, this.dimensoesProduto, this.categoriaProduto, this.estoqueProduto);
    
    this.servico.inserirProduto( new Produto(this._id, this.pic, this.nomeProduto, this.descricaoProduto, this.precoProduto, this.dimensoesProduto, this.categoriaProduto, this.estoqueProduto)).subscribe(
      data => {console.log("data " + data);
              this.servico.listarProdutos().subscribe(
                data => {console.log(data); },
                error => console.log(error)
              );
            },
      error => console.log(error)
    );

    // this.servico.listarProdutos().subscribe(
    //   data => {console.log(data); },
    //   error => console.log(error)
    // );

    this.nomeProduto = "";
    this.descricaoProduto = "";
    this.precoProduto = null;
    this.dimensoesProduto = [];
    this.larguraProduto = null;
    this.alturaProduto = null;
    this.expessuraProduto = null;
    this.categoriaProduto = null;
    this.estoqueProduto = null;


    // location.reload();

    
  }

}
