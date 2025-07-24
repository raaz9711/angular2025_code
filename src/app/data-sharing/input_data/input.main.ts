import { Component } from "@angular/core";
import { InputParentComponent } from "./parent";

@Component({
    selector: "app-input-main",
    imports:[InputParentComponent],
    template:`<h1>Input Data Main Component</h1>
    <app-input-parent></app-input-parent>
    `
})
export class InputMainComponent {
    // Component logic can be added here
}