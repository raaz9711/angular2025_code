import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  imports: [],
  templateUrl: './assignment4.component.html',
  styleUrl: './assignment4.component.css'
})
export class Assignment4Component  implements OnInit, AfterViewInit{

@ViewChild('portal',{static:true}) portal! :  ElementRef<HTMLParagraphElement>;
@ViewChild('portal2',{static:false}) portal2! :  ElementRef<HTMLParagraphElement>;

ngOnInit(): void {
  console.log(this.portal,new Date())
  console.log(this.portal2,new Date())

}
ngAfterViewInit() {
  
  console.log('view->',this.portal,new Date())
  console.log('view->',this.portal2,new Date())
}

}
