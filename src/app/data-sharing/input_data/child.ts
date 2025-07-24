import { Component, Input } from "@angular/core";

@Component({
  selector: "app-input-child",
  template: `<h1>Input Data | {{childData}}</h1>`
})
export class InputChildComponent {
  // Component logic can be added here
  @Input('name') childData: string = '';
}
