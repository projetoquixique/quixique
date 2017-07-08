import { Injectable } from '@angular/core';
import { Produto } from './produto-artesao-view/produto.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class LojaArtesaoViewServiceService {

  public uriBase = "http://localhost:3000";

  produtos:Produto[] = [];


  constructor(private http: Http) { }
  
  verPecas: boolean = false;
  showVerPecas(){
    if(this.verPecas){
      this.verPecas = false;
    }else{
      this.verPecas = true;
    }
  }

  public imagem: string = "";
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
  public dimensoes: any = [];
  getDimensoes(){
    return this.dimensoes;
  };
  public _id = null;
  
  // public produto: Produto;

  selecionarProduto(produto:Produto){
    this.imagem = produto.imagem;
    this.nome = produto.nome;
    this.descricao = produto.descricao;
    this.preco = produto.preco;
    this.estoque = produto.estoque;
    this.categoria = produto.categoria;
    this.dimensoes.push(produto.dimensoes);
    this._id = produto._id;
    // let id = produto._id;
    console.log(this.dimensoes);
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
              produtos.push(new Produto(produto._id, produto.imagem, produto.nome, produto.descricao, produto.preco, produto.dimensoes, produto.categoria, produto.estoque))
            }
            this.produtos = produtos;
            return produtos;
          })
          .catch((error: Response)=> Observable.throw(error));
  }

  editarProduto(produto: Produto){
    return this.http.put(this.uriBase+"/api/produtos/"+this._id, produto)
        .map((response: Response) =>{ response.json()})
        .catch((error: Response) => Observable.throw(error));
  }

}
