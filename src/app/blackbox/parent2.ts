import { Component } from '@angular/core';
import { Child2Component } from "./child2";

@Component({
  selector: 'app-parent2',
  template: `
    <div>
      <h2>Parent2 Component</h2>
      <!-- Parent2 component content goes here -->
       <app-child2></app-child2>
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
export class Parent2Component {}