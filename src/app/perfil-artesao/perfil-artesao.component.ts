import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-perfil-artesao',
  templateUrl: './perfil-artesao.component.html',
  styleUrls: ['./perfil-artesao.component.css']
})
export class PerfilArtesaoComponent implements OnInit {

   // Comprando meus produtos, você vai levar mais do que o meu trabalho, vai levar uma dose de amor <3

  infoPerfil = {  
    nome:"Maria Oliveira",
    bio:"Escultora, 8 anos de profissão",
    localizacao:"Quixadá, Ceará",
    apresentacao:"Ser escultora é mais que uma profissão, é uma paixão que alimento todos os dias.",
    historia:"25 anos de idade. Produzo as mais variadas peças em madeira e afins. Com 17 anos de idade, eu aprendi o básico de escultura em um curso ofertado na minha cidade. Com o passar do tempo, eu pratiquei minha arte até criar meu próprio estilo de esculpir. Hoje, eu trabalho como autônoma e vendo esculturas das mais diversas formas e temáticas. Sou muito feliz com o que faço e meu sonho é poder transmitir os meus conhecimentos a outros interessados, para que a arte nunca morra.",
    urlLoja:"#",
    telefone:"(88) 9 8128-1741",
    email:"oliveiramaria_esculturas@gmail.com",
    urlFacebook:"@mariaoliveiralima_esculturas",
    urlInstagram:"@mariaesculturas"
  }

  modoEdicaoSaibaMais = false;
  editarInfoSaibaMais(){
    this.modoEdicaoSaibaMais = !this.modoEdicaoSaibaMais;
    $(".modo-edicao").css("opacity", 1);
    $(".perfil .editavel").css("background-color", "#6d361c");
    $(".historia .editavel").css("background-color", "#e28f2b");
    $(".btn-editar").hide();
  }

  irParaSaibaMais() {
    $('html, body').animate({
      scrollTop: $(".saiba-mais").offset().top - 130
    }, 500);
  }
 
  constructor() { }

  ngOnInit() {
  }

}
