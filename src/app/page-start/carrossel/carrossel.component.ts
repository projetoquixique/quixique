import { Component, OnInit, ViewChildren, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit, AfterViewInit{

  @ViewChildren('container') container:any;

  itemClass = [];

  qtdImgs:number = 4;

  imgs = [];

  currentImg:number = 0;

  containerAspectRatio = null; 

  sort(qtd ,max, min){
      let i = 0;
      while(this.imgs.length < qtd){
        let img = Math.floor(Math.random()*(max - min + 1)) + min;
        if(this.imgs.length > 0){
          let aux = false;
          for(let j in this.imgs){
            if(img == this.imgs[i]){
              aux = true;
            }
          }
          if(aux == false){
            this.imgs.push(img);
          }
        }else{
          this.imgs.push(img);
        }
      }
    }

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
      this.formShow = true;
      event.stopPropagation();
      return false;       
  }

  hideForm(str){
    if(str == "" || str == undefined || str != 'close'){
      // event.preventDefault();
      event.stopPropagation();
      return false; 
    }
    else if(str == 'close'){
      this.formShow = false;
    }
  }

  // ajustCover(){
  //   let containers = this.vitrine._results;
  //   console.log(containers);

  //   for(let i in containers){

  //     var imgs = [];

  //     var containerAspectRatio = containers[i].nativeElement.clientHeight/containers[i].nativeElement.clientWidth;
  //     alert("container: "+containerAspectRatio);

  //     imgs.push(containers[i].nativeElement.firstElementChild);
      
  //     for (let i in imgs){
  //       var imgAspectRatio = imgs[i].naturalHeight/imgs[i].naturalWidth;

  //       alert("imagem: "+imgAspectRatio);
        

  //       // console.log('img: '+imgAspectRatio);
  //       // console.log('container: '+containerAspectRatio);

  //       if(imgAspectRatio < containerAspectRatio){
  //           this.itemClass.push('tall');
  //           console.log('imagem ' + i +': '+ this.itemClass);
  //       }else{
  //           this.itemClass.push('wide');             
  //           console.log('imagem ' + i +': '+ this.itemClass);                                   
  //       }
  //     }
  //   }
  // }

  // ajustCover(){
  //   let containers = this.vitrine._results;
  //   var imgs = [];
  //   var imgAspectRatio;
  //   var containerAspectRatio = containers[0].nativeElement.clientHeight/containers[0].nativeElement.clientWidth;
    
  //   console.log(containers);
  //   for(let i in containers){
  //     // imgs.push(containers[i].nativeElement.firstElementChild);
  //     // imgAspectRatio = imgs[i].naturalHeight/imgs[i].naturalWidth;
      
  //     // imgs.push(containers[i].nativeElement.firstElementChild);
  //     imgAspectRatio = containers[i].nativeElement.firstElementChild.naturalHeight/containers[i].nativeElement.firstElementChild.naturalWidth;

  //     console.log(imgAspectRatio);
  //   }
  // }

  ajustCover(img){
    var imgAspectRatio = img.naturalHeight/img.naturalWidth;

    if(imgAspectRatio < this.containerAspectRatio){
        this.itemClass.push('tall');
    }else{
        this.itemClass.push('wide');                                
    } 
  }

  updateImg(time){
    // this.currentImg = 0;

    setInterval(() => { 
      if(this.currentImg < this.qtdImgs-1){
        // alert('menor');
        this.currentImg += 1;
      }else{
        // alert('maior');
        this.currentImg = 0;
      }
      // alert(this.currentImg)
    
    }, time);
  }

  constructor() { }

  ngAfterViewInit() {
    this.containerAspectRatio = this.container._results[0].nativeElement.clientHeight/this.container._results[0].nativeElement.clientWidth;    
    // alert(this.containerAspectRatio)
    // this.ajustCover();
  }

  ngOnInit() {
    this.sort(this.qtdImgs,25,1);
    // this.updateImg(3000);
  }



}
