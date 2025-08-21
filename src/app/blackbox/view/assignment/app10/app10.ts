import { Component, ViewChild } from '@angular/core';
import { CaretPositionDirective } from './caret-position.directive';

@Component({
  selector: 'app-caret-parent',
  imports:[CaretPositionDirective],
  template: `
    <textarea appCaretPosition rows="4" cols="30"></textarea>
    <button (click)="showCaret()">Show Caret Position</button>
    <button (click)="showLength()">Show Length</button>

  `
})
export class CaretParentComponent {
  @ViewChild(CaretPositionDirective) caretDir!: CaretPositionDirective;

  showCaret() {
    const pos = this.caretDir.getSelection();
    // const len = this.caretDir.getSelection()[1];
    console.log('Caret position:', pos);
  }

  showLength() {
    const pos = this.caretDir.showLength();
    // const len = this.caretDir.getSelection()[1];
    console.log('Caret position:', pos);
  }
}