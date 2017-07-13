import { Component, OnInit } from '@angular/core';
import { RequestService } from './../services/request.service';


@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  constructor(public request: RequestService) { }
  
  public serverBaseUrl = this.request.serverBaseUrl;


  pageCount:number = 0;


  previous(){
    if(this.pageCount > 0){
      this.pageCount -= 1;
    };
  };

  next(){
    // if (this.formularioOk()){
      if (this.pageCount < 4){
        this.pageCount += 1;
      };
    // };
  };
  
  idCliente;

  cliente = {nome:'',bairro:'',celular:'',cep:'',cidade:'',complemento:'',cpf:'',dataDeNascimento:'',email:'',estado:'',logradouro:'',nomeDeUsuario:'',numero:'',senha:''};

  ngOnInit() {
    this.idCliente = sessionStorage.getItem('userId');
    this.request.get(this.serverBaseUrl + '/clientes/' + this.idCliente).subscribe(
      data => {console.log(data); this.cliente = data},
      erro => {console.log(erro)}
    )
  }

  senha;
  senhaRepeat;

  salvar(){
    // if (this.senha == this.senhaRepeat) {
      this.request.put(this.serverBaseUrl + '/clientes/' + this.idCliente, this.cliente).subscribe(
        data => {console.log(data)},
        erro => {console.log(erro)}
      )
    // }
  }

}
