import { Component, OnInit } from '@angular/core';

import { TelaPrincipalCienteService } from './../tela-principal-cliente/tela-principal-cliente.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos:[any] = [
      {
          "id":"1","extra":{"chave":"valor"} ,"nome":"Enfeite para parede Arara Colorida - Diversos tamanhos",
          "preco":23.00, "img":"thumb (1).png","estoque":"7"
      },
      {
          "id":"2","extra":{"chave":"valor"} ,"nome":"Chaveiro personalizado Galinha Choca Quixadá",
          "preco":6.00, "img":"thumb (2).png","estoque":"3"
      },
      {
          "id":"3","extra":{"chave":"valor"} ,"nome":"Porta-ovos Galinha Pintadinha - Diversas cores",
          "preco":24.00, "img":"thumb (3).png","estoque":"5"
      },
      {
          "id":"4","extra":{"chave":"valor"} ,"nome":"Enfeite para parede Flor e joaninha",
          "preco":35.00, "img":"thumb (4).png","estoque":"5"
      },
      {
          "id":"5","extra":{"chave":"valor"} ,"nome":"Boneco de palha e cabaça Malandrinho de chapéu",
          "preco":25.00, "img":"thumb (5).png","estoque":"9"
      },
      {
          "id":"6","extra":{"chave":"valor"} ,"nome":"Enfeite para parede Casinha de barro",
          "preco":16.00, "img":"thumb (6).png","estoque":"2"
      },
      {
          "id":"7","extra":{"chave":"valor"} ,"nome":"Porta chaves Papagaios famintos",
          "preco":13.00, "img":"thumb (7).png","estoque":"8"
      },
      {
          "id":"8","extra":{"chave":"valor"} ,"nome":"Escultura de madeira Boi do sertão",
          "preco":23.00, "img":"thumb (8).png","estoque":"5"
      }
    //   {
    //       "id":"9","extra":{"chave":"valor"} ,"nome":"Sandália de couro Maria Bonita - num 35 a 40",
    //       "preco":63.00, "img":"thumb (9).png"
    //   },
    //   {
    //       "id":"10","extra":{"chave":"valor"} ,"nome":"Jogo de chá de Barro Casa da vovó",
    //       "preco":56.00, "img":"thumb (10).png"
    //   },
    //   {
    //       "id":"11","extra":{"chave":"valor"} ,"nome":"Enfeite de telha para parede Pôr-do-sol no Cedro",
    //       "preco":27.00, "img":"thumb (11).png"
    //   },
    //    {
    //       "id":"12","extra":{"chave":"valor"} ,"nome":"Brincos de crochê Ganhei do Crush",
    //       "preco":12.00, "img":"thumb (12).png"
    //   },
    //   {
    //       "id":"13","extra":{"chave":"valor"} ,"nome":"Peso para papel Galinha Choca Quixadá",
    //       "preco":15.00, "img":"thumb (13).png"
    //   },
    //   {
    //       "id":"14","extra":{"chave":"valor"} ,"nome":"Boneco de sucata Enfermeiro",
    //       "preco":150.00, "img":"thumb (14).png"
    //   },
    //   {
    //       "id":"15","extra":{"chave":"valor"} ,"nome":"Pintura a óleo Parede do Cedro 90cm x 60cm",
    //       "preco":73.00, "img":"thumb (15).png"
    //   },
    //   {
    //       "id":"16","extra":{"chave":"valor"} ,"nome":"Enfeite para parede Peixe Olho de bila",
    //       "preco":25.00, "img":"thumb (16).png"
    //   },
    //   {
    //       "id":"17","extra":{"chave":"valor"} ,"nome":"Toalha bordada Flores do Sertão - Diversos modelos",
    //       "preco":32.00, "img":"thumb (17).png"
    //   },
  ];

  constructor(private clientService:TelaPrincipalCienteService) { }


  ngOnInit() {
  }

}
