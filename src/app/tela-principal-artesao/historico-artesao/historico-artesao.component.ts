import { Component, OnInit } from '@angular/core';
import { TelaPrincipalArtesaoServiceService } from './../tela-principal-artesao-service.service';

@Component({
  selector: 'app-historico-artesao',
  templateUrl: './historico-artesao.component.html',
  styleUrls: ['./historico-artesao.component.css']
})
export class HistoricoArtesaoComponent implements OnInit {

  constructor(public telaPrincipalArtesaoService:TelaPrincipalArtesaoServiceService ) { }

  ngOnInit() {
    this.verTodos();
  }
  
  // filtragemHistorico;
  filtragemTipo;

  verAceitos(){
    let artesao_id = sessionStorage.getItem('userId'); 
    this.telaPrincipalArtesaoService.getPedidosConfirmados(artesao_id).subscribe(
      data => {console.log(data); console.log(this.telaPrincipalArtesaoService.pedidosConfirmados.length);
              if(this.telaPrincipalArtesaoService.pedidosConfirmados.length==0){
                // this.showZero = true;
                console.log(this.telaPrincipalArtesaoService.pedidosConfirmados.length);
              } this.filtragemTipo = "Pedidos confirmados"},
      error => console.log(error)
    )
  }

  verRecusados(){
    let artesao_id = sessionStorage.getItem('userId'); 
    this.telaPrincipalArtesaoService.getPedidosRecusados(artesao_id).subscribe(
      data => {console.log(data); console.log(this.telaPrincipalArtesaoService.pedidosConfirmados.length);
              if(this.telaPrincipalArtesaoService.pedidosConfirmados.length==0){
                // this.showZero = true;
                console.log(this.telaPrincipalArtesaoService.pedidosConfirmados.length);
              } this.filtragemTipo = "Pedidos recusados"},
      error => console.log(error)
    )
  }

  verTodos(){
    let artesao_id = sessionStorage.getItem('userId'); 
    this.telaPrincipalArtesaoService.getTodosPedidosArtesao(artesao_id).subscribe(
      data => {console.log(data); console.log(this.telaPrincipalArtesaoService.pedidosConfirmados.length);
              if(this.telaPrincipalArtesaoService.pedidosConfirmados.length==0){
                // this.showZero = true;
                console.log(this.telaPrincipalArtesaoService.pedidosConfirmados.length);
              } this.filtragemTipo = "Todos os pedidos"},
      error => console.log(error)
    )
  }

  abrirModal:boolean = false;

  nomeProduto;
  nomeCliente;
  imgProduto;
  precoProduto;
  descProduto;
  destPedido;
  qtdPedido;
  valorPedido;
  statusPedido;

  linhaClicada(pedido){
    if(!this.abrirModal){
      this.abrirModal = true;
      this.statusPedido = pedido.status;
      this.valorPedido = pedido.valor;
      this.qtdPedido = pedido.qtd;
      this.destPedido = pedido.destino;
      this.descProduto = pedido.produto_id.descricao;
      this.precoProduto = pedido.produto_id.preco;
      this.imgProduto = pedido.produto_id.imagem[0];
      this.nomeProduto = pedido.produto_id.nome;
      this.nomeCliente = pedido.cliente_id.nome;
    }else{
      this.abrirModal = false;
    }
  }
  id;
  abrirModal2 = false;
  clicarExcluir(pedido){
    event.stopPropagation();
    this.id = pedido._id;
    this.abrirModal2 = true;    
  }
  confirmarExcluir(){
    console.log(this.id);
    this.telaPrincipalArtesaoService.deletarPedido(this.id).subscribe(
      data => {console.log(data);
      
              let artesao_id = sessionStorage.getItem('userId'); 
              this.telaPrincipalArtesaoService.getTodosPedidosArtesao(artesao_id).subscribe(
                data => {console.log(data); console.log(this.telaPrincipalArtesaoService.pedidosConfirmados.length);
                        if(this.telaPrincipalArtesaoService.pedidosConfirmados.length==0){
                          // this.showZero = true;
                          console.log(this.telaPrincipalArtesaoService.pedidosConfirmados.length);
                        } this.filtragemTipo = "Todos os pedidos"},
                error => console.log(error)
              )

              this.abrirModal2 = false;    
      
              },
      error => {console.log(error)}
    )
  }
  naoExcluir(){
    this.abrirModal2 = false;
  }

}
