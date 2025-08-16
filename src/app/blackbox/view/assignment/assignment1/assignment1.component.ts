import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { LoginBtnComponent } from "./loginbtn";

@Component({
  selector: 'app-assignment1',
  imports: [LoginBtnComponent],
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Assignment1Component  implements OnInit {

  @ViewChild('loginBtn',{static:true}) loginBtn! : ElementRef<HTMLButtonElement>;

  ngOnInit() {
    console.log(this.loginBtn);
    this.loginBtn.nativeElement.focus();
  }

  // ngAfterViewInit(){
  //   console.log(this.loginBtn);

  //   this.loginBtn.nativeElement.focus();
  // }

}
