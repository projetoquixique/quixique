import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit {

  formShow:boolean = false;

  // showForm(str){
  //   // alert('chegou isso: ' + str);
  //   if(this.formShow == false){
  //     this.formShow = true;
  //   }
  //   else{
  //     if(str == "" || str == undefined || str != 'close'){
  //       // event.preventDefault();
  //       event.stopPropagation();
  //       return false; 
  //     }
  //     else if(str == 'close'){
  //       this.formShow = false;
  //     }
  //   }
  // }

  showForm(){
      // alert('chegou isso: ' + str);    
      this.formShow = true;
      event.stopPropagation();
      return false;       
  }

  hideForm(str){
    // alert('chegou isso: ' + str);
    if(str == "" || str == undefined || str != 'close'){
      // event.preventDefault();
      event.stopPropagation();
      return false; 
    }
    else if(str == 'close'){
      this.formShow = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
