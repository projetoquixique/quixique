export class Pedido{
    constructor(
        public _id,
        public artesao_id,
        public cliente_id,
        public produto_id,
        public qtd:Number,
        public valor:Number,
        public destino:String,
        public status:String,
        public data,
    ){}
}