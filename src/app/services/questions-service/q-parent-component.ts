import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { QAppComponentA } from "./q-app-component-a";
import { QAppComponentB } from "./q-app-component-b";
import { QAppComponentC } from "./q-app-component-c";

@Component({
  selector: "app-q-parent-component",
  template: `
<h1>Q Parent Component</h1>
<q-app-component-a></q-app-component-a>
<q-app-component-b></q-app-component-b>
<q-app-component-c></q-app-component-c>
  `,
  imports: [FormsModule, QAppComponentA, QAppComponentB, QAppComponentC]
})
export class AppQParentComponent {
    message: string = "Hello from Q Parent Component";
    
    constructor() {
        console.log(this.message);
    }

    

}