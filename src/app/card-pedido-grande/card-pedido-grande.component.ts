import { Component, OnInit, ViewChild, ViewChildren, ElementRef, AfterViewInit, QueryList, Input } from '@angular/core';

@Component({
  selector: 'app-card-pedido-grande',
  templateUrl: './card-pedido-grande.component.html',
  styleUrls: ['./card-pedido-grande.component.css']
})
export class CardPedidoGrandeComponent implements OnInit {
  // @ViewChild('verMais') verMais : ElementRef;
  // @ViewChild('textoMensagem') textoMensagem : ElementRef;

  // @ViewChildren('textoMensagem') textoMensagemC;
  
  ngOnInit() {
    // console.log("view child " + this.textoMensagem);
  }

  // showVerMais:any = [false, true, false, true, false];
 
  ngAfterViewInit(){
    // for(var i = 0; i<this.textoMensagemC.length; i++){
    //   let showVerMais:boolean = true;
    //   if(this.textoMensagemC._results[i].nativeElement.clientHeight>60){

    //     showVerMais = true;
    //   }
    //   else{}       
    // }
  }
  // mudarShow(){
  //   if(!this.showVerMais){
  //     this.showVerMais = true;
  //   }else{
  //     this.showVerMais=false;
  //   }
  // }

  constructor() {  }
  pedidos = [{
    "nomeProduto":"Lata de lixo feita com tampinhas de garrafa",
    "nomeCliente":"Joana Da Silva",
    "mensagem":"Olá, queria encomendar essa linda lata de lixo pro aniversário da minha sobrinha Jamile é muito importante pois ela adora latas de lixo, por isso preciso dela até o dia 26 de junho pra bater os parabéns dela, ela ta fazendo 7 anos e queria uma lata de lixo. ",
    "dataExpiracao":"5 dias 5:40min",
    "quantidade":1,
    "valor":54.99,
    "dias":25
  },
  { "nomeProduto":"Lata de lixo feita com tampinhas de garrafa",
    "nomeCliente":"Mariana Ferreira Da Silva",
    "mensagem":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis velit sit amet nisi ullamcorper, et sollicitudin libero volutpat. Sed sodales ante non felis tincidunt convallis. Praesent et malesuada orci, eu sollicitudin ante. Mauris lobortis velit sit amet nisi ullamcorper, et sollicitudin libero volutpat. Sed sodales ante non felis tincidunt convallis. Praesent et malesuada orci, eu sollicitudin ante. ",
    "dataExpiracao":"2 dias 5:40min",
    "quantidade":2,
    "valor":54.99,
    "dias":22
  },
  { "nomeProduto":"Lata de lixo feita com tampinhas de garrafa",
    "nomeCliente":"Mariana Ferreira Da Silva",
    "mensagem":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis velit sit amet nisi ullamcorper, et sollicitudin libero volutpat. Sed sodales ante non felis tincidunt convallis. Praesent et malesuada orci, eu sollicitudin ante. ",
    "dataExpiracao":"2 dias 5:40min",
    "quantidade":2,
    "valor":54.99,
    "dias":22
  },
  { "nomeProduto":"Lata de lixo feita com tampinhas de garrafa",
    "nomeCliente":"Joana Da Silva",
    "mensagem":"Olá, queria encomendar essa linda lata de lixo pro aniversário da minha sobrinha Jamile é muito importante pois ela adora latas de lixo, por isso preciso dela até o dia 26 de junho pra bater os parabéns dela, ela ta fazendo 7 anos e queria uma lata de lixo. ela ta fazendo 7 anos e queria uma lata de lixo. ela ta fazendo 7 anos e queria uma lata de lixo. ela ta fazendo 7 anos e queria uma lata de lixo. ela ta fazendo 7 anos e queria uma lata de lixo. ela ta fazendo 7 anos e queria uma lata de lixo. ela ta fazendo 7 anos e queria uma lata de lixo. ela ta fazendo 7 anos e queria uma lata de lixo. ",
    "dataExpiracao":"5 dias 5:40min",
    "quantidade":1,
    "valor":54.99,
    "dias":25
  },
  { "nomeProduto":"Lata de lixo feita com tampinhas de garrafa",
    "nomeCliente":"Joana Da Silva",
    "mensagem":"Olá, queria encomendar essa linda lata de lixo pro aniversário da minha sobrinha Jamile é muito importante pois ela adora latas de lixo, por isso preciso dela até o dia 26 de junho pra bater os parabéns dela, ela ta fazendo 7 anos e queria uma lata de lixo. ",
    "dataExpiracao":"5 dias 5:40min",
    "quantidade":1,
    "valor":54.99,
    "dias":25
  }];

  // unidade = "Unidade";
  // unidades = "Unidades";


  // verMaisFunction(){
  //   console.log(this.textoMensagem)
  // }

  // teste = 'testando';

}
