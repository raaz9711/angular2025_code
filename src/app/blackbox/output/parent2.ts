import { Component } from '@angular/core';
import { Child2Component } from "./child2";

@Component({
  selector: 'app-parent2',
  template: `
    <div>
      <h2>Parent2 Component</h2>
      <h4> {{ childvalue * rate}}</h4>
      <!-- Parent2 component content goes here -->
       <app-child2 (quantityChange)="onQtyChange($event)"></app-child2>
    </div>
  `,
  styles: [`
    div {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `],
  imports: [Child2Component]
})
export class Parent2Component {

  onQtyChange(event : number){
    console.log('event',event);
    this.childvalue = event;
  }

  rate : number = 200;
  childvalue : number = 0;
}