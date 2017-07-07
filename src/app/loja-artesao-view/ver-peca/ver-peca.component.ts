import { Component, OnInit } from '@angular/core';
import { LojaArtesaoViewServiceService } from './../loja-artesao-view-service.service';

@Component({
  selector: 'app-ver-peca',
  templateUrl: './ver-peca.component.html',
  styleUrls: ['./ver-peca.component.css']
})
export class VerPecaComponent implements OnInit {

  constructor(public servico: LojaArtesaoViewServiceService) { }

  ngOnInit() {
  }

}
