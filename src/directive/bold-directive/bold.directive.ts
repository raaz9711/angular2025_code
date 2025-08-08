import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private el : ElementRef,private render : Renderer2) { 
    console.log('el',el);

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(this.el.nativeElement,'font-weight','bold')

  }
  @HostListener('mouseleave') onMouseLeave() {
        this.render.setStyle(this.el.nativeElement,'font-weight','normal')

  }

}
