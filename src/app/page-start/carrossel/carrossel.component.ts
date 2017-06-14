import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit {

  formShow:boolean = false;

  // showForm(str){
  //   // alert("clicado");
  //   if(this.formShow == false){
  //     this.formShow = true;
  //   }
  //   else{
  //     if(str != "filter"){
  //       return false;
  //     }
  //     this.formShow = false;
  //   }
  // }

  showForm(str){
    alert(str);
    if(this.formShow == false){
      this.formShow = true;
    }
    else{
      if(str == 'filter' || str == undefined ){
        return false;
      }
      this.formShow = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
