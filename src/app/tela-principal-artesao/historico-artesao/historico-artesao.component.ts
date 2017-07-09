import { Component, OnInit } from '@angular/core';
import { TelaPrincipalArtesaoServiceService } from './../tela-principal-artesao-service.service';

@Component({
  selector: 'app-historico-artesao',
  templateUrl: './historico-artesao.component.html',
  styleUrls: ['./historico-artesao.component.css']
})
export class HistoricoArtesaoComponent implements OnInit {

  constructor(public telaPrincipalArtesaoService:TelaPrincipalArtesaoServiceService ) { }

  ngOnInit() {
    let artesao_id = sessionStorage.getItem('userId'); 
    this.telaPrincipalArtesaoService.getPedidosConfirmados(artesao_id).subscribe(
      data => {console.log(data); console.log(this.telaPrincipalArtesaoService.pedidosConfirmados.length);
              if(this.telaPrincipalArtesaoService.pedidosConfirmados.length==0){
                // this.showZero = true;
                console.log(this.telaPrincipalArtesaoService.pedidosConfirmados.length);
              }},
      error => console.log(error)
    )
  }

  abrirModal:boolean = false;

  linhaClicada(){
    if(!this.abrirModal){
      this.abrirModal = true;
    }else{
      this.abrirModal = false;
    }
  }
  excluir(){
    event.stopPropagation();
    console.log("chamou");
  }

}
