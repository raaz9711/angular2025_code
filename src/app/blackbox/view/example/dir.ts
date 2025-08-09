import { Directive, ElementRef } from "@angular/core";

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
  setColor(color: string) {
    console.log(color)
    this.el.nativeElement.style.backgroundColor = color;
  }
}