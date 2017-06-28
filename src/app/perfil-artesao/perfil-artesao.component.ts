import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-perfil-artesao',
  templateUrl: './perfil-artesao.component.html',
  styleUrls: ['./perfil-artesao.component.css']
})
export class PerfilArtesaoComponent implements OnInit {

  infoPerfil = {  
    nome:"Maria Oliveira",
    atividade:"Escultora, 8 anos de profissão",
    localizacao:"Quixadá, Ceará",
    apresentacao:"Ser escultora é mais que uma profissão, é uma paixão que alimento todos os dias.",
    historia:"25 anos de idade. Produzo as mais variadas peças em madeira e afins. Com 17 anos de idade, eu aprendi o básico de escultura em um curso ofertado na minha cidade. Com o passar do tempo, eu pratiquei minha arte até criar meu próprio estilo de esculpir. Hoje, eu trabalho como autônoma e vendo esculturas das mais diversas formas e temáticas. Sou muito feliz com o que faço e meu sonho é poder transmitir os meus conhecimentos a outros interessados, parsa que a arte nunca morra. Comprando meus produtos, você vai levar mais do que o meu trabalho, vai levar uma dose de amor <3",
    urlLoja:"#",
    telefone:"(88) 9 8128-1741",
    email:"oliveiramaria_esculturas@gmail.com",
    urlFacebook:"@mariaoliveiralima_esculturas",
    urlInstagram:"@mariaesculturas"
  }

  irParaSaibaMais() {
    $('html, body').animate({
      scrollTop: $(".saiba-mais").offset().top
    }, 500);
  }
 
  constructor() { }

  ngOnInit() {
  }

}
