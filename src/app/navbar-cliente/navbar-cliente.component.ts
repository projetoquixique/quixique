import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';
import { Category } from './../page-start/categories/category-thumbnail/category-thumbnail.model';


@Component({
  selector: 'app-navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.css']
})
export class NavbarClienteComponent implements OnInit {

 @Input() categories:Array<Category> = [
    new Category("Madeira","Encontre aqui as melhores peças esculpidas em madeira para decoração.","thumb (1).png"),
    new Category("Pedra Sabão","O dom de transformar um simples pedaço de rocha nas mais sinuosas curvas de um corpo.","thumb (2).png"),
    new Category("Barro","Aqui você encontra os mais diversos artesanatos em barro com características da cultura regional.","thumb (3).png"),
    new Category("Biscuit","Artesanato em biscuit para casamentos, formaturas, aniversários e decorações em geral.","thumb (4).png"),
    new Category("Cama, mesa e banho","Temos a maior variedade em conforto e beleza para sua casa.","thumb (5).png"),
    new Category("Religiosos","Artigos religiosos que dão um toque divino para sua casa","thumb (6).png"),
    new Category("Couro","Encontre uma grande variedade em peças de couro de alta qualidade.","thumb (7).png"),
    new Category("Decoração","Diversidade de objetos que dão o toque especial que falta nos ambientes de sua casa.","thumb (8).png"),
    new Category("Pintura","Veja através dos olhos dos nossos melhores artesãos as belezas que tornarão seus dias mais felizes.","thumb (9).png"),
    new Category("Bijuteria","Sua oportunidade de ficar ainda mais deslumbrante, valorizando seu charme de forma barata e elegante.","thumb (10).png"),
    new Category("Vestuário","Do popular ao estilizado, nossos artesãos possuem nas mãos, a capacidade de representar os valores de cada cliente.","thumb (11).png"),
    new Category("Recicláveis","Recriar é um dom que você verá por aqui. De uma coisa sem valor à um objeto de valor.","thumb (12).png"),
  ];
  
  userName = sessionStorage.getItem('currentUserName');

  constructor(private authService:AuthenticationService,
              private router:Router) { }

  logout() {
    if (this.authService.logout()){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

}
