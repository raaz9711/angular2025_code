import { Component, ViewChild } from '@angular/core';
import {  CounterComponent } from "./counter";

@Component({
  selector: 'app-assignment2',
  imports: [ CounterComponent],
  templateUrl: './assignment2.component.html',
  styleUrl: './assignment2.component.css'
})
export class Assignment2Component {

  @ViewChild(CounterComponent) counterComponent!: CounterComponent;

  onIncrement() {
    this.counterComponent.incr();
  }

   onDecrement() {
    this.counterComponent.dec();
  }


}
