import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCaretPosition]'
})
export class CaretPositionDirective {
  private caretPos : number = 0;
  private length : number = 0;

  constructor(private el : ElementRef<HTMLTextAreaElement>) { }

  @HostListener('keyup')
  @HostListener('click')
  updateCaret(){
    const input = this.el.nativeElement;
    this.caretPos = input.selectionStart ?? 0;
  }

    @HostListener('keyup')
  @HostListener('click')
  lengthOf(){
    const input = this.el.nativeElement;
    this.length = input.value.length;
  }  

  getSelection() {
    // console.log(this.caretPos,this.length)
    return this.caretPos
  }

  showLength(){
    return this.length ?? 0
  }

}
