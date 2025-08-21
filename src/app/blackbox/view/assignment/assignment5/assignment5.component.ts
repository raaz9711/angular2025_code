/*
Querying directives, not just components
Goal: read a directive instance to call its API.
Build AutoFocusDirective with a trigger() method.
Parent reads it: @ViewChild(AutoFocusDirective) auto!: AutoFocusDirective; and calls auto.trigger() on demand.
✅ Accept when the directive method runs from parent.



*/

import { Component, ViewChild } from '@angular/core';
import { AutofocusDirective } from "./autofocus.directive";

@Component({
  selector: 'app-assignment5',
  imports: [AutofocusDirective],
  templateUrl: './assignment5.component.html',
  styleUrl: './assignment5.component.css'
})
export class Assignment5Component {

@ViewChild(AutofocusDirective) auto! : AutofocusDirective;


onTrigger(){
  this.auto.trigger();
}



}
