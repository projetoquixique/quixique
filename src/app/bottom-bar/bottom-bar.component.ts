import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  constructor() { }

  // propriedades ligadas
  nextButton:string = "avançar";

  pageCount:number = 0;

  @Output() page = new EventEmitter <Number>();

  previous(){
    if(this.pageCount > 0){
      this.page.emit(this.pageCount -= 1);
    }
    if(this.pageCount != 3){
      this.nextButton = "avançar"
    }
  }
  next(){
    // alert("proximo:");
    if(this.pageCount < 3){
      this.page.emit(this.pageCount += 1);
    }
    if(this.pageCount == 3){
      this.nextButton = "concluir"
    }
  }

  ngOnInit() {
  }

}
