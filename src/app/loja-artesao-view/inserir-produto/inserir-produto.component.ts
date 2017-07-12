import { Component, OnInit } from '@angular/core';
import { ProdutoArtesaoViewComponent } from './../produto-artesao-view/produto-artesao-view.component';
import { LojaArtesaoViewServiceService } from './../loja-artesao-view-service.service';
import { Produto } from './../produto-artesao-view/produto.model';
import { FileUploader } from 'ng2-file-upload';

import { RequestService } from './../../services/request.service';

// var ng2_file_upload_1 = require("ng2-file-upload");
// const URL = '/api/';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.css']
  // providers: [LojaArtesaoViewServiceService]
})

export class InserirProdutoComponent implements OnInit {

  private URL = this.requestService.serverBaseUrl + '/produtos/upload';
  
  public uploader:FileUploader = new FileUploader({url:this.URL});
  // public uploader = new ng2_file_upload_1.FileUploader({ url: URL });


  constructor(public servico: LojaArtesaoViewServiceService,
              private requestService:RequestService) { }
  
  // public produtoView: ProdutoArtesaoViewComponent;
  
  public nome: string = this.servico.getNome();

  public produtos:Produto[] = null;
  ngOnInit() {
    console.log(sessionStorage.getItem('userId'));
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

  showZero: boolean = false;

  abrirModal = false;

  fecharModal(){
    this.abrirModal = false
  }

  inserirProduto(){
    this.abrirModal = true;
    
    // setTimeout(function(){ this.abrirModal = false }, 3000);


    let artesao_id = sessionStorage.getItem('userId'); 
    console.log(artesao_id);
    this.dimensoesProduto.push(this.larguraProduto);
    this.dimensoesProduto.push(this.alturaProduto);
    this.dimensoesProduto.push(this.expessuraProduto);
    // var produto = new Produto(this._id, this.pic, this.nomeProduto, this.descricaoProduto, this.precoProduto, this.dimensoesProduto, this.categoriaProduto, this.estoqueProduto);
    
    this.servico.inserirProduto( new Produto(this._id, artesao_id, this.pic, this.nomeProduto, this.descricaoProduto, this.precoProduto, this.dimensoesProduto, this.categoriaProduto, this.estoqueProduto)).subscribe(
      data => {console.log("data " + data);
              // this.servico.listarProdutos().subscribe(
              //   data => {console.log(data); },
              //   error => console.log(error)
              // );
              
              this.servico.getProdutosArtesao(artesao_id).subscribe(
                    data => {console.log(data); console.log(this.servico.produtos.length);
                              if(this.servico.produtos.length==0){
                                this.servico.showZero = true;
                                console.log(this.servico.produtos.length);
                            }else{
                                this.servico.showZero = false;  
                            }
                            console.log(this.showZero)},
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
