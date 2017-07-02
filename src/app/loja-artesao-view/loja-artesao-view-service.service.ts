import { Injectable } from '@angular/core';
import { Produto } from './produto-artesao-view/produto.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class LojaArtesaoViewServiceService {

  public uriBase = "http://localhost:3000";

  produtos:Produto[] = [
    // {
    //       "imagem":"thumb (1).png",
    //       "nome":"Arara de gesso coloridas",
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo."
    //       "preco":"23.00", 
    //       "estoque":30,
    //   }
    
    //   {
    //       "nome":"Arara de gesso coloridas",
    //       "preco":"23.00", 
    //       "img":"thumb (1).png",
    //       "estoque":30,
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo."
    //   },
    //   {
    //       "nome":"Chaveiro personalizado Galinha Choca Quixadá",
    //       "preco":"6.00", 
    //       "img":"thumb (2).png",
    //       "estoque":20,
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis."
    //   },
    //   {
    //       "nome":"Porta-ovos Galinha pintadinha para decoração",
    //       "preco":"24.00", 
    //       "img":"thumb (3).png",
    //       "estoque":13,
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo."
    //   },
    //   {
    //       "nome":"Enfeite para parede flor e joaninha",
    //       "preco":"35.00", 
    //       "img":"thumb (4).png",
    //       "estoque":15,
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo."
    //   },
    //   {
    //       "nome":"Boneco de palha e cabaça",
    //       "preco":"25.00", 
    //       "img":"thumb (5).png",
    //       "estoque":5,
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo."
    //   },
    //   {
    //       "nome":"Casinha de barro para decoração",
    //       "preco":"16.00", 
    //       "img":"thumb (6).png",
    //       "estoque":7,
    //       "descricao":"Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. In elementis mé pra quem é amistosis quis leo."
    //   }
  ];


  constructor(private http: Http) { }

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
  public dimensoes: string = "";
  getDimensoes(){
    return this.dimensoes;
  }
  
  // public produto: Produto;

  selecionarProduto(produto:Produto){
    this.imagem = produto.imagem;
    this.nome = produto.nome;
    this.descricao = produto.descricao;
    this.preco = produto.preco;
    this.estoque = produto.estoque;
    this.categoria = produto.categoria;
    this.dimensoes = produto.dimensoes;
  }
  // receberDados(imagem, nome, descricao, unidades, preco){
  //   this.imagem = imagem;
  //   this.nome = nome;
  //   this.descricao = descricao;
  //   this.unidades = unidades;
  //   this.preco = preco;
  //   console.log(this.imagem, this.nome,this.descricao, this.unidades, this.preco);
  // }
  inserirProduto(produto:Produto){
      this.produtos.unshift(produto);
      console.log(produto);
      return this.http.post(this.uriBase+"/api/produtos", produto)
        .map((response: Response) =>{ response.json()})
        .catch((error: Response) => Observable.throw(error));
  }
  listarProdutos(){
    return this.http.get(this.uriBase+"/api/produtos")
      .map((response:Response)=>{
        let produtos:Produto[] = [] 
        for(let produto of response.json()){
          produtos.push(new Produto(produto.imagem, produto.nome, produto.descricao, produto.preco, produto.dimensoes, produto.categoria, produto.estoque))
        }
        this.produtos = produtos;
        return produtos;
      })
      .catch((error: Response)=> Observable.throw(error));
  }
}
