// This is a attribute Directive...
import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private el = inject(ElementRef);
  defaultColor = input('');
  appHighlight = input('');
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight() || this.defaultColor() || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
