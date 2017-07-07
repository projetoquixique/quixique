export class Produto{
    constructor(
        public _id,
        public imagem,
        public nome:string,
        public descricao:string,
        public preco:number,
        public dimensoes,
        public categoria:string,
        public estoque:number
    ){}
}