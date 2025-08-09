import { Component } from "@angular/core";

// child.component.ts
@Component({
  selector: 'app-stopwatch',
  template: `<span>{{ seconds }}</span>`,
})
export class StopwatchComponent {
  seconds = 0;
  start() {++this.seconds;}
  reset() {this.seconds = 0}
}
