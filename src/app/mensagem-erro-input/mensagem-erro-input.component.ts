import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem-erro-input',
  templateUrl: './mensagem-erro-input.component.html',
  styleUrls: ['./mensagem-erro-input.component.css']
})
export class MensagemErroInputComponent implements OnInit {
	@Input() mensagemDeErro:string;

  constructor() { }

  ngOnInit() {
  }

}
