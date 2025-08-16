import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  imports: [NgIf,NgFor,NgTemplateOutlet],
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css'
})
export class Assignment3Component {
  items : {name:string}[] = [{name:'raj kumar'},{name : 'rajesh kumar'}] ;
  items2 : {name:string}[] = [{name:'raj kumar'},{name : 'rajesh kumar'}] ;

@ViewChild('emptyStateTpl',{static:true}) emptyTpl! : TemplateRef<any>;

remove(){
  this.items.pop();
}

remove2(){
  this.items2.pop();
}

}
