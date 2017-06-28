
export class TelaPrincipalCienteService{

    public carrinho:Array<any> = [];

    public qtdCarrinho:number;

    addToCart(produto){
        this.qtdCarrinho = this.carrinho.length+1;
        console.log(produto);
        this.carrinho.push(produto);
    }

    constructor(){
    }
}