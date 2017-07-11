import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contador-caracteres',
  templateUrl: './contador-caracteres.component.html',
  styleUrls: ['./contador-caracteres.component.css']
})
export class ContadorCaracteresComponent implements OnInit {

  @Input() contador:string;

  constructor() { }

  ngOnInit() {
  }

}
