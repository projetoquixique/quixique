import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-perfil-artesao',
  templateUrl: './produtos-perfil-artesao.component.html',
  styleUrls: ['./produtos-perfil-artesao.component.css']
})
export class ProdutosPerfilArtesaoComponent implements OnInit {

  produtos:[any] = [
      {
          "nome":"Arara de gesso colorida - Para decoração - Diversos tamanhos",
          "preco":"23.00", "img":"thumb (1).png"
      },
      {
          "nome":"Chaveiro personalizado Galinha Choca Quixadá",
          "preco":"6.00", "img":"thumb (2).png"
      },
      {
          "nome":"Porta-ovos Galinha pintadinha para decoração - Diversas cores",
          "preco":"24.00", "img":"thumb (3).png"
      },
      {
          "nome":"Enfeite para parede flor e joaninha 40cm x 40cm",
          "preco":"35.00", "img":"thumb (4).png"
      },
      {
          "nome":"Boneco de palha e cabaça - Malandrinho de chapéu",
          "preco":"25.00", "img":"thumb (5).png"
      },
      {
          "nome":"Casinha de barro para decoração - Diversas",
          "preco":"16.00", "img":"thumb (6).png"
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
