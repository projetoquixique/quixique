import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-cadastro-start',
  templateUrl: './form-cadastro-start.component.html',
  styleUrls: ['./form-cadastro-start.component.css']
})
export class FormCadastroStartComponent implements OnInit {

  @Output() closeForm = new EventEmitter<string>();

  close(str){
    // alert(str);
    this.closeForm.emit(str);
  }

  cadastrarUsuario(user, data){
    // alert(user);
  	sessionStorage.setItem('tipoUsuario',user);
  };

  guardarDados(data){
    if(data){
      data = JSON.stringify(data);
  	  sessionStorage.setItem('userData',data);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
