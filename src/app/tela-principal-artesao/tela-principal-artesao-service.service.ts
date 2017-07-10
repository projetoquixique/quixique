import { Injectable } from '@angular/core';
// import { Produto } from './produto-artesao-view/produto.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Pedido } from './produto.model';

@Injectable()
export class TelaPrincipalArtesaoServiceService {

  constructor(private http: Http) { }

  public uriBase = "http://localhost:3000";

  pedidos:Pedido[] = [];

  pedidosConfirmados: Pedido[]=[];

  pedidosRecusados: Pedido[]=[];
  

  showZero:boolean = false;

  getPedidosArtesao(aid){
    return this.http.get(this.uriBase+"/api/pedidos/"+aid)
          .map((response: Response)=>{
            console.log(response.json());
            let pedidos:Pedido[] = [];
            let i = 0;
            for(let pedido of response.json()){
              pedidos.push(new Pedido(pedido._id, response.json()[i].aid, response.json()[i].cid, response.json()[i].pid, pedido.qtd, pedido.valor, pedido.destino, pedido.status, pedido.data));
              i++;
            }
            this.pedidos = pedidos;
            return pedidos;
          })
          .catch((error: Response)=> Observable.throw(error));
  }

  confirmarPedido(produto){
    console.log(produto);
    return this.http.put(this.uriBase+"/api/pedidos/aceitar/"+produto._id, produto)
          .map((response: Response)=>{
            console.log(response.json())
          })
          .catch((error: Response)=> Observable.throw(error));
  }
  
  recusarPedido(produto){
    console.log(produto);
    return this.http.put(this.uriBase+"/api/pedidos/recusar/"+produto._id, produto)
          .map((response: Response)=>{
            console.log(response.json())
          })
          .catch((error: Response)=> Observable.throw(error));
  }

  getPedidosConfirmados(aid){
    return this.http.get(this.uriBase+"/api/pedidos/confirmados/"+aid)
          .map((response: Response)=>{
            console.log(response.json());
            let pedidos:Pedido[] = [];
            let i = 0;            
            for(let pedido of response.json()){
              pedidos.push(new Pedido(pedido._id, response.json()[i].aid, response.json()[i].cid, response.json()[i].pid, pedido.qtd, pedido.valor, pedido.destino, pedido.status, pedido.data));
              i++;
            }
            this.pedidosConfirmados = pedidos;
            return pedidos;
          })
          .catch((error: Response)=> Observable.throw(error));
  }

  getPedidosRecusados(aid){
    return this.http.get(this.uriBase+"/api/pedidos/recusados/"+aid)
          .map((response: Response)=>{
            console.log(response.json());
            let pedidos:Pedido[] = [];
            for(let pedido of response.json()){
              pedidos.push(new Pedido(pedido._id, response.json()[0].aid, response.json()[0].cid, response.json()[0].pid, pedido.qtd, pedido.valor, pedido.destino, pedido.status, pedido.data))
            }
            this.pedidosConfirmados = pedidos;
            return pedidos;
          })
          .catch((error: Response)=> Observable.throw(error));
  }

  getTodosPedidosArtesao(aid){
    return this.http.get(this.uriBase+"/api/pedidos/todos/"+aid)
          .map((response: Response)=>{
            console.log(response.json());
            let pedidos:Pedido[] = [];
            let i = 0;            
            for(let pedido of response.json()){
              pedidos.push(new Pedido(pedido._id, response.json()[i].aid, response.json()[i].cid, response.json()[i].pid, pedido.qtd, pedido.valor, pedido.destino, pedido.status, pedido.data));
              i++;
            }
            this.pedidosConfirmados = pedidos;
            return pedidos;
          })
          .catch((error: Response)=> Observable.throw(error));
  }

  deletarPedido(id){
    return this.http.delete(this.uriBase+"/api/pedidos/deletar/"+id)
        .map((response: Response) =>{ response.json()})
        .catch((error: Response) => Observable.throw(error));
  }

}
