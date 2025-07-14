// This is a attribute Directive...
import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private element = inject(ElementRef)

  appHighlight = input('');
  constructor() {
    console.log('HighlightDirective initialized');
    //this.element.nativeElement.style.backgroundColor = 'yellow';

  }

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight() || 'yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
   private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
