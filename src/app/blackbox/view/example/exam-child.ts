import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    imports:[],
  selector: 'app-exam-child',
  template: `<p> Child</p>
  <input #nameInput type="text" placeholder="Enter Name">
  `
})
export class ExamChildComponent  implements AfterViewInit {

@ViewChild('nameInput')  nameInput! : ElementRef<HTMLInputElement>;

ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
}
  
}