
import { Component } from "@angular/core";

// child.component.ts
@Component({
  selector: 'counter',
  template: `<div>{{counter}}</div>`,
})
export class CounterComponent {
  counter = 0;

  incr(){
    this.counter++;
  }

  dec(){
    this.counter--;
  }
}
