import { Component } from '@angular/core';
import { ChildComponent } from "./child";

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <!-- Parent component content goes here -->
      <h2>Parent Component</h2>
      <app-child [content] = "content"></app-child>
      <button (click)="onClk()"> Click </button>
    </div>
  `,
  styles: [`
    div {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `],
  imports: [ChildComponent]
})
export class ParentComponent { 
content : string = 'raj'

onClk() {
    this.content += '-' 
}

}