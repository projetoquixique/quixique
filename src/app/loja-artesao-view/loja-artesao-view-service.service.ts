import { Injectable } from '@angular/core';
import { Produto } from './produto-artesao-view/produto.model';

@Injectable()
export class LojaArtesaoViewServiceService {
    
  produtos = [
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


  constructor() { }

  public nome: string = "";
  getNome(){
    return this.nome;
  };
  public descricao: string = "";
  getDescricao(){
    return this.descricao;
  };
  public unidades: string = "";
  getUnidades(){
    return this.unidades;
  };
  public preco: string = "";
  getPreco(){
    return this.preco;
  };
  
  receberDados(nome, descricao, unidades, preco){
    this.nome = nome;
    this.descricao = descricao;
    this.unidades = unidades;
    this.preco = preco;
    console.log(this.nome,this.descricao, this.unidades, this.preco);
  }
  inserirProduto(produto:Produto){
      this.produtos.push(produto);
  }
}
