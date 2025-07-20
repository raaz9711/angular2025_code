import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "./shared-data.service";
@Component({
  selector: "app-component-b",
  template: `
<h3>Component B</h3>
<p>Message from A: {{ message }}</p>
`,

})
export class AppComponentB implements OnInit {
    message: string = "Hello from Component B";
    
    constructor(private sharedDataService: SharedDataService) {
        console.log(this.message);
    }
    ngOnInit() {
        this.sharedDataService.curentMessage.subscribe(message => {
            console.log("Received message:", message);
            this.message = message;
        });
    }
}