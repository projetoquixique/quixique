import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-capa-apresentacao',
  templateUrl: './capa-apresentacao.component.html',
  styleUrls: ['./capa-apresentacao.component.css']
})
export class CapaApresentacaoComponent implements OnInit {

  constructor() { }

  @Input() infoCapa: string;
  @Output() irParaSaibaMais = new EventEmitter<string>();

  clickSaibaMais() {
    this.irParaSaibaMais.emit(null);
  }

  ngOnInit() {
  }

}
