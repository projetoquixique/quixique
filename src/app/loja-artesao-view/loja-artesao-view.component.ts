import { AuthenticationService } from './../services/authentication.service';
import { Produto } from './produto-artesao-view/produto.model';
import { Component, OnInit, Input } from '@angular/core';
import { LojaArtesaoViewServiceService } from "app/loja-artesao-view/loja-artesao-view-service.service";
import { ProdutoArtesaoViewComponent } from "./produto-artesao-view/produto-artesao-view.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-loja-artesao-view',
  templateUrl: './loja-artesao-view.component.html',
  styleUrls: ['./loja-artesao-view.component.css']
})
export class LojaArtesaoViewComponent implements OnInit {
  
  @Input() produto;

  produtos:Produto[] = null;

  constructor(public servico: LojaArtesaoViewServiceService, public authService: AuthenticationService, private router:Router) { }
  
  showZero:boolean = this.servico.showZero;

  ngOnInit() {
    // this.servico.listarProdutos().subscribe(
    //   data => {this.produtos = data},
    //   error => console.log(error)
    // );
    if (!this.authService.isLogged() || sessionStorage.getItem('userType') !== 'artesao'){
      this.router.navigate(['/']);
    }
    let artesao_id = sessionStorage.getItem('userId'); 
    this.servico.getProdutosArtesao(artesao_id).subscribe(
      data => {console.log(data); console.log(this.servico.produtos.length);
              if(this.servico.produtos.length==0){
                this.servico.showZero = true;
              }},
      error => console.log(error)
    );
  }

}
