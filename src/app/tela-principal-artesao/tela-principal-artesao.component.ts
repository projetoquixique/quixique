import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CardPedidoGrandeComponent } from '../card-pedido-grande/card-pedido-grande.component';
import { CardPedidoPequenoComponent } from '../card-pedido-pequeno/card-pedido-pequeno.component';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-tela-principal-artesao',
  templateUrl: './tela-principal-artesao.component.html',
  styleUrls: ['./tela-principal-artesao.component.css']
})
export class TelaPrincipalArtesaoComponent implements OnInit {

  constructor(private router:Router,
              private authService:AuthenticationService) { }

  ngOnInit() {
    if (!this.authService.isLogged() || localStorage.getItem('userType') !== 'artesao'){
      this.router.navigate(['/']);
    }
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
