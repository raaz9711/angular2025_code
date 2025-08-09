import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <div>
      <h2>Child2 Component</h2>
 <button (click)="dec()">-</button>
    <span>{{ qty }}</span>
    <button (click)="inc()">+</button>
    </div>
  `,
  styles: [`
    div {
      padding: 16px;
      border: 1px solid #111;
      border-radius: 4px;
    }
  `]
})
export class Child2Component { 
  qty = 1;

  @Output() quantityChange = new EventEmitter<number>();

  inc() { this.qty++; this.quantityChange.emit(this.qty); }
  dec() { this.qty = Math.max(1, this.qty - 1); this.quantityChange.emit(this.qty); }

}