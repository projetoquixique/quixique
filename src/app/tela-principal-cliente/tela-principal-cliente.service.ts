import { OnInit } from '@angular/core';

export class TelaPrincipalCienteService{

    public dropdown:boolean = false;

    public carrinho:Array<any> = [];

    public qtdCarrinho:number;

    public valorTotal:number = 0;

    qtd = {};

    chageQtd(){
        // this.qtd[productId] = qtd;
        this.setStorage('quantidade', this.qtd);
    }

    setStorage(chave:string, valor:any){
        valor = JSON.stringify(valor);
        sessionStorage.setItem(chave,valor);
    }

    getStorage(chave){
        let value:any = sessionStorage.getItem(chave);
        if(value && value !== null && value !== undefined){
            return JSON.parse(value);
        }
        return false;
    }

    addToCart(produto){
        this.qtdCarrinho = this.carrinho.length;
        if(this.check(produto)) return true;
        this.carrinho.push(produto);
        this.setStorage('produtos', this.carrinho);
        this.qtd[produto.id] = 1;
        this.setStorage('quantidade', this.qtd);
        this.update();
    }

    removeFromCart(produto){
        for(let i = 0; i < this.carrinho.length; i++){
            if(produto.id == this.carrinho[i].id){
                this.carrinho.splice(i,1);
            }
        }
        this.setStorage('produtos', this.carrinho);
        this.update();
        return false;
    }

    check(produto){
        for( let i in this.carrinho){
            if(produto.id == this.carrinho[i].id){
                return true;
            }
        }
        return false;
    }

    sumProducts(){
        this.valorTotal = 0;
        for(let i in this.carrinho){
            this.valorTotal += (this.carrinho[i].preco * this.qtd[this.carrinho[i].id]);
        }
        this.chageQtd();
    }

    parsePrice(price:any){
        price = parseFloat(price).toFixed(2);
        return price;
    }

    constructor(){
    }

    start(){
        let produtos:any = this.getStorage('produtos');
        if(this.getStorage('quantidade') != false) this.qtd = this.getStorage('quantidade');
        if(produtos != false){
            this.carrinho = produtos;
            this.sumProducts();
        }
        this.qtdCarrinho = this.carrinho.length;
    }

    update(){
        this.sumProducts();
        this.qtdCarrinho = this.carrinho.length;
    }
}