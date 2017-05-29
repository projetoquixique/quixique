import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastro-1',
  templateUrl: './form-cadastro-1.component.html',
  styleUrls: ['./form-cadastro-1.component.css']
})
export class FormCadastro1Component implements OnInit {

  show: number = 0;

  capturar(e){
    this.show = e;
    // alert(e);
  }
  
  constructor() {

  }

  ngOnInit() {
  }

}
