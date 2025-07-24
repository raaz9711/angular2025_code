import { Component } from "@angular/core";
import { OutputParentComponent } from "./parent";

@Component({
    selector: "app-output-main",
    imports:[OutputParentComponent],
    template:`<h1><Output></Output> Data Main Component</h1>
    <app-output-parent></app-output-parent>`
    
})
export class OutputMainComponent {
    // Component logic can be added here
}