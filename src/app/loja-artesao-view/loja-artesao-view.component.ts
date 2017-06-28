import { Component, OnInit, Input } from '@angular/core';
import { LojaArtesaoViewServiceService } from "app/loja-artesao-view/loja-artesao-view-service.service";
import { ProdutoArtesaoViewComponent } from "./produto-artesao-view/produto-artesao-view.component";

@Component({
  selector: 'app-loja-artesao-view',
  templateUrl: './loja-artesao-view.component.html',
  styleUrls: ['./loja-artesao-view.component.css']
})
export class LojaArtesaoViewComponent implements OnInit {
  
  @Input() produto;

  constructor(public servico: LojaArtesaoViewServiceService) { }

  ngOnInit() {
  }

}
