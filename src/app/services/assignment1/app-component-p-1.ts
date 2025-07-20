import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponentA1 } from "./app-component-a-1";
import { AppComponentB1 } from "./app-component-b-1";

@Component({
  selector: "app-parent-component-1",
  template: `
<h1>Q Parent Component</h1>
<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<app-component-a-1></app-component-a-1>
</div>
<br>
<div style="border: 1px solid red; padding: 10px; margin-bottom: 20px;">
<app-component-b-1></app-component-b-1>
</div>
  `,
  imports: [FormsModule, AppComponentA1,AppComponentB1]
})
export class AppParentComponent1 {
    
    constructor() {
    }

    

}