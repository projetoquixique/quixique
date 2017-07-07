import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pedido-pequeno',
  templateUrl: './card-pedido-pequeno.component.html',
  styleUrls: ['./card-pedido-pequeno.component.css']
})
export class CardPedidoPequenoComponent implements OnInit {

  constructor() { }
  
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

  ngOnInit() {
  }

}
