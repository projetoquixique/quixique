import { Injectable } from '@angular/core';
import { Produto } from './produto-artesao-view/produto.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class LojaArtesaoViewServiceService {

  public uriBase = "http://localhost:3000";

  produtos:Produto[] = [];

  showZero:boolean = false;

  constructor(private http: Http) { }
  

  //abrir visualizador de peça
  verPecas: boolean = false;
  showVerPecas(){
    if(this.verPecas){
      this.verPecas = false;
    }else{
      this.verPecas = true;
    }
  }


  //variaveis do produto
  // public imagem;
  // getImagem(){
  //   return this.imagem
  // }
  public aid;
  getAid(){
    return this.aid;
  };
  public id;
  getId(){
    return this.id;
  };
  // public imagem: string = "";
  // getImagem(){
  //   return this.imagem
  // };
  public imagem;
  getImagem(){
    return this.imagem
  };
  public nome: string = "";
  getNome(){
    return this.nome;
  };
  public descricao: string = "";
  getDescricao(){
    return this.descricao;
  };
  public preco: number = null;
  getPreco(){
    return this.preco;
  };
  public estoque: number = null;
  getEstoque(){
    return this.estoque;
  };
  public categoria: string = "";
  getCategoria(){
    return this.categoria;
  };
  public dimensoes: any;
  getDimensoes(){
    return this.dimensoes;
  };

  
  //seleciona o produto pra exibir no visualizador
  selecionarProduto(produto:Produto){
    this.aid = produto.artesao_id;
    this.id = produto._id;
    this.imagem = produto.imagem;
    this.nome = produto.nome;
    this.descricao = produto.descricao;
    this.preco = produto.preco;
    this.estoque = produto.estoque;
    this.categoria = produto.categoria;
    this.dimensoes = produto.dimensoes;
  }

  inserirProduto(produto){
    console.log(produto);
    this.produtos.unshift(produto);
    console.log(this.produtos);
    return this.http.post(this.uriBase+"/api/produtos", produto)
        .map((response: Response) =>{ response.json()})
        .catch((error: Response) => Observable.throw(error));
  }

  listarProdutos(){
    return this.http.get(this.uriBase+"/api/produtos")
          .map((response: Response)=>{
            let produtos:Produto[] = [];
            for(let produto of response.json()){
              produtos.push(new Produto(produto._id, produto.aid, produto.imagem, produto.nome, produto.descricao, produto.preco, produto.dimensoes, produto.categoria, produto.estoque))
            }
            this.produtos = produtos;
            return produtos;
          })
          .catch((error: Response)=> Observable.throw(error));
  }

  getProdutosArtesao(artesao_id){
    return this.http.get(this.uriBase+"/api/produtos/"+artesao_id)
          .map((response: Response)=>{
            let produtos:Produto[] = [];
            for(let produto of response.json()){
              produtos.push(new Produto(produto._id, produto.aid, produto.imagem, produto.nome, produto.descricao, produto.preco, produto.dimensoes, produto.categoria, produto.estoque))
            }
            this.produtos = produtos;
            return produtos;
          })
          .catch((error: Response)=> Observable.throw(error));
  }

  editarProduto(produto: Produto){
    // this.id = produto._id;
    return this.http.put(this.uriBase+"/api/produtos/"+this.id, produto)
        .map((response: Response) =>{ response.json()})
        .catch((error: Response) => Observable.throw(error));
  }

  deletarPeca(){
    return this.http.delete(this.uriBase+"/api/produtos/"+this.id)
        .map((response: Response) =>{ response.json()})
        .catch((error: Response) => Observable.throw(error));
  }

}
