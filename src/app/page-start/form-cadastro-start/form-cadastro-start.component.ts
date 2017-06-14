import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-cadastro-start',
  templateUrl: './form-cadastro-start.component.html',
  styleUrls: ['./form-cadastro-start.component.css']
})
export class FormCadastroStartComponent implements OnInit {

  @Output() closeModal = new EventEmitter<string>();

  close(event){
    this.closeModal.emit(event.target.id);
    // alert(event.target.id);
  }


  constructor() { }

  ngOnInit() {
  }

}
