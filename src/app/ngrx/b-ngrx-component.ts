// counter-b.component.ts
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounterValue } from './counter.selectors';

@Component({
  selector: 'app-counter-b',
  imports: [AsyncPipe],
  template: `<h3>Counter: {{ counter$ | async }}</h3>`
})
export class CounterBComponent {

  counter$!: Observable<number>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.counter$ = this.store.select(getCounterValue);
    console.log('CounterBComponent initialized with store:', this.store);
  }
}
