import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-testcom',
  imports: [],
  templateUrl: './testcom.component.html',
  styleUrl: './testcom.component.css'
})
export class TestcomComponent {
count = signal(0);
/**
 *
 */
constructor() {
console.log('The count is: ' + this.count());
}
// Signals are getter functions - calling them reads their value.

updateCount() {
  this.count.update(value => value + 1);
  console.log('The count is: ' + this.count());
}
minusCount() {
  this.count.update(value => value - 1);
  console.log('The count is: ' + this.count());
}

resetCount() {
  this.count.set(0);
  console.log('The count is reset to: ' + this.count());  }

doubleCount() {
if(this.count() === 0) {
  this.count.set(1);
}
  this.count.update(value => value * 2);
  console.log('The count is doubled to: ' + this.count());  
}


}
