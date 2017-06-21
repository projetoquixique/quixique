import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

	thumbnails;
  selectedImage;
  showFullscreen:boolean = false;
  product;
  comments;

  setSelectedImage(image){
    this.selectedImage = image;
  };

  showPictureFullscreen(){
    this.showFullscreen = !this.showFullscreen;
    console.log(this.showFullscreen)
  }

  constructor() {
    this.thumbnails = [
      {"url":"assets/images/components/detalhe-produto/img-01.jpg"},
      {"url":"assets/images/components/detalhe-produto/img-02.jpg"},
      {"url":"assets/images/components/detalhe-produto/img-03.jpg"},
      {"url":"assets/images/components/detalhe-produto/img-04.jpg"}
    ];

    this.product = {title:'Enfeite para parede "Telhas pintadas com as belezas de Quixadá"',
                    price:'R$ 25,73',
                    units:50,
                    size:'40cm',
                    materials:'barro',
                    description:'Enfeite para parede "Telhas pintadas com as belezas de Quixadá" - nas cores lilás, vermelho e amarelo. Enfeite para parede "Telhas pintadas com as belezas de Quixadá" - nas cores lilás, vermelho e amarelo. Enfeite para parede "Telhas pintadas com as belezas de Quixadá" - nas cores lilás, vermelho e amarelo.',
                    authorBio:'Meu nome é Joana e trabalho especificamente com produtos feitos de barro.'};

    this.comments = [
      {"author":"Maria", "text":"Produto de ótima qualidade! Recomendo!"},
      {"author":"José", "text":"Chegou direitinho, estou bastante satisfeito!"},
      {"author":"Amanda", "text":"Comprei e adorei!"}
    ];

    this.selectedImage = this.thumbnails[0];
  }

  ngOnInit() {
  }

}
