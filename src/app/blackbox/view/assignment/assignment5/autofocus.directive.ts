import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {

  constructor(private el : ElementRef) { }

  trigger(){
    this.el.nativeElement.focus();
  }

}
