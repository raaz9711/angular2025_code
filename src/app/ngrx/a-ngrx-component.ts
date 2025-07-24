// counter-a.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from './counter.actions';

@Component({
  selector: 'app-counter-a',
  template: `
  <button (click)="add()">Increment</button>
  <button (click)="dec()">Decrement</button>

  <button (click)="reset()">Reset</button>
  <button (click)="setTo(100)">SetTo</button>

  `

})
export class CounterAComponent {
  constructor(private store: Store) {
    console.log('CounterAComponent initialized with store:', this.store);
  }

  add() {
    console.log('Incrementing counter',this.store);
    this.store.dispatch(increment());
  }
  dec() {
    console.log('Decrementing counter',this.store);
    this.store.dispatch({ type: '[Counter] Decrement' });
  }
  reset() {
    console.log('Resetting counter',this.store);
    this.store.dispatch({ type: '[Counter] Reset' });
  }
  setTo(count: number) {
    console.log('Setting counter to', count, this.store);
    this.store.dispatch({ type: '[Counter] Set Count', count });
  }
}
