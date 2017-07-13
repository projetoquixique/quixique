import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TelaPrincipalCienteService } from './../tela-principal-cliente/tela-principal-cliente.service';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-page-carrinho',
  templateUrl: './page-carrinho.component.html',
  styleUrls: ['./page-carrinho.component.css']
})


export class PageCarrinhoComponent implements OnInit {
  
  public page = 0;
  public modalShow = false;

  navbar = true;
  
  title1:string = "Carrinho de compras";
  title2:string = "Confirmar endereço de entrega";

  cepMask = [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  logged = null;

  @Output() logar = new EventEmitter<string>();

  next(){
    event.stopPropagation();
    // event.preventDefault();
    if(this.auth.isLogged() == true && this.clientService.qtdCarrinho > 0){
      this.page += 1;
    }else{
      this.clientService.dropdown = true;
      // alert(this.clientService.dropdown);
    }
  }

  back(){
    this.page -= 1;
  }

  finish(){
    this.modalShow = true;
  }

  close(){
    this.modalShow = false;   
  }

  blur(){
    this.clientService.dropdown = false;
  }
  
  constructor(private clientService:TelaPrincipalCienteService, private auth:AuthenticationService) { }

  ngOnInit() {
    this.clientService.start();
    this.logged = this.auth.isLogged();
  }

}
