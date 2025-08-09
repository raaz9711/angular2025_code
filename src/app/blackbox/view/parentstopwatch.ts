// parent.component.ts
import { Component, ViewChild } from '@angular/core';
import { StopwatchComponent } from './stopwatch';

@Component({
    imports:[StopwatchComponent],
  template: `
    <app-stopwatch></app-stopwatch>
    <button (click)="start()">Start</button>
    <button (click)="reset()">Reset</button>
  `,
  selector:'app-dashboard'
})
export class DashboardComponent {
  @ViewChild(StopwatchComponent) watch!: StopwatchComponent;

  start() { this.watch.start(); }
  reset() { this.watch.reset(); }
}
