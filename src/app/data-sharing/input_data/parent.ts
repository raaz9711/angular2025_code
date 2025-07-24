import { Component } from "@angular/core";
import { InputChildComponent } from "./child";
InputChildComponent
@Component({
  selector: "app-input-parent",
  imports: [InputChildComponent],
  template: `<h1>Parent</h1>
    <app-input-child [name]="'Raj Kumar'"></app-input-child>
  `
})
export class InputParentComponent {
  // Component logic can be added here
}
