import { Component, OnInit } from '@angular/core';
import { CardPedidoGrandeComponent } from '../card-pedido-grande/card-pedido-grande.component';
import { CardPedidoPequenoComponent } from '../card-pedido-pequeno/card-pedido-pequeno.component';

@Component({
  selector: 'app-tela-principal-artesao',
  templateUrl: './tela-principal-artesao.component.html',
  styleUrls: ['./tela-principal-artesao.component.css']
})
export class TelaPrincipalArtesaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mudarVisualizacao(){
      let grade = document.getElementsByClassName("glyphicon glyphicon-th-large")[0];
      let lista = document.getElementsByClassName("glyphicon glyphicon-th-list")[0];
      let mudarListaGrade = document.getElementsByClassName("gradeHide")[0];
      let mudarGradeLista = document.getElementsByClassName("listaShow")[0];
      if(grade){
        grade.className="glyphicon glyphicon-th-list";
        if(mudarListaGrade){
          mudarListaGrade.className = "gradeShow";
          mudarGradeLista.className = "listaHide";
        }
      }else{
        lista.className="glyphicon glyphicon-th-large";
        if(!mudarListaGrade){
          console.log("netrou");
          let mudarListaGrade = document.getElementsByClassName("gradeShow")[0];
          let mudarGradeLista = document.getElementsByClassName("listaHide")[0];
          mudarListaGrade.className = "gradeHide";
          mudarGradeLista.className = "listaShow";
        }
      }
  }
}
