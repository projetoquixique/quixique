import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-infografico',
  templateUrl: './infografico.component.html',
  styleUrls: ['./infografico.component.css']
})
export class InfograficoComponent implements OnInit, AfterViewInit {

  @ViewChildren('container') container:any;

  itemClass = [];

  containerAspectRatio = null;

  constructor() { }

  ajustCover(img){
    var imgAspectRatio = img.naturalHeight/img.naturalWidth;

    if(imgAspectRatio < this.containerAspectRatio){
        this.itemClass.push('tall');
    }else{
        this.itemClass.push('wide');                                
    } 
  }

  ngAfterViewInit(){
    this.containerAspectRatio = this.container._results[0].nativeElement.clientHeight/this.container._results[0].nativeElement.clientWidth;
  }

  ngOnInit() {
  }

}
