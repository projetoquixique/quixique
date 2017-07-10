import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CardPedidoGrandeComponent } from '../card-pedido-grande/card-pedido-grande.component';
import { CardPedidoPequenoComponent } from '../card-pedido-pequeno/card-pedido-pequeno.component';

import { TelaPrincipalArtesaoServiceService } from './tela-principal-artesao-service.service';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-tela-principal-artesao',
  templateUrl: './tela-principal-artesao.component.html',
  styleUrls: ['./tela-principal-artesao.component.css']
})
export class TelaPrincipalArtesaoComponent implements OnInit {

  constructor(private router:Router,
              private authService:AuthenticationService,
              public telaPrincipalArtesaoService: TelaPrincipalArtesaoServiceService) { }

  // showZero:boolean = false;

  ngOnInit() {
    if (!this.authService.isLogged() || sessionStorage.getItem('userType') !== 'artesao'){
      this.router.navigate(['/']);
    }
    let artesao_id = sessionStorage.getItem('userId'); 
    this.telaPrincipalArtesaoService.getPedidosArtesao(artesao_id).subscribe(
      data => {console.log(data); console.log(this.telaPrincipalArtesaoService.pedidos.length);
              if(this.telaPrincipalArtesaoService.pedidos.length==0){
                this.telaPrincipalArtesaoService.showZero = true;
              }else{
                this.telaPrincipalArtesaoService.showZero = false;
              }
      },
      error => console.log(error)
    );
  }
  
  showGrade = false;
  showLista = true;
  mudarVisualizacao(){
      let grade = document.getElementsByClassName("glyphicon glyphicon-th-large")[0];
      let lista = document.getElementsByClassName("glyphicon glyphicon-th-list")[0];
      if(grade){
        grade.className="glyphicon glyphicon-th-list";
        this.showGrade = true;
        this.showLista = false;
      }else{
        lista.className="glyphicon glyphicon-th-large";
        this.showGrade = false;
        this.showLista = true;
      }
  }
}
