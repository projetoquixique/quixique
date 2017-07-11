import { Component, OnInit } from '@angular/core';
import { TelaPrincipalArtesaoServiceService } from './../tela-principal-artesao/tela-principal-artesao-service.service';

@Component({
  selector: 'app-card-pedido-pequeno',
  templateUrl: './card-pedido-pequeno.component.html',
  styleUrls: ['./card-pedido-pequeno.component.css']
})
export class CardPedidoPequenoComponent implements OnInit {

  constructor(public pedidosService: TelaPrincipalArtesaoServiceService) { }
  

  ngOnInit() {
    console.log(this.pedidosService.pedidos)
  }
  
  abrirModal:boolean = false;

  fecharModal(){
    this.abrirModal = false;
  }

  confirmarPedido(produto){
    console.log("pedido: " + produto);
    if(produto.produto_id.estoque < produto.qtd){
      // console.log('nao pode aceitar')
      this.abrirModal = true;
    }else{

      this.pedidosService.confirmarPedido(produto).subscribe(
        data => {console.log(data);
                  let artesao_id = sessionStorage.getItem('userId'); 
                  this.pedidosService.getPedidosArtesao(artesao_id).subscribe(
                      data => {console.log(data); console.log(this.pedidosService.pedidos.length);
                              if(this.pedidosService.pedidos.length==0){
                                this.pedidosService.showZero = true;
                              }else{
                                this.pedidosService.showZero = false;
                              }
                            },
                      error => console.log(error)
                  )
      },
        error => console.log(error)
      )
      
    }
  }

  recusarPedido(produto){
    console.log(produto);
    this.pedidosService.recusarPedido(produto).subscribe(
      data => {console.log(data);
                let artesao_id = sessionStorage.getItem('userId'); 
                this.pedidosService.getPedidosArtesao(artesao_id).subscribe(
                    data => {console.log(data); console.log(this.pedidosService.pedidos.length);
                            if(this.pedidosService.pedidos.length==0){
                              this.pedidosService.showZero = true;
                            }else{
                              this.pedidosService.showZero = false;
                            }
                          },
                    error => console.log(error)
                )
    },
      error => console.log(error)
    )
  }

}
