import { Component } from "@angular/core";
import { SharedDataService } from "./shared-data.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-component-a",
  template: `
<h3>Component A</h3>
<input [(ngModel)]="message" placeholder="Enter message">
<button (click)="sendMessage()">Send to Component B</button>
  `,
  imports: [FormsModule]
})
export class AppComponentA {
    message: string = "Hello from Component A";
    
    constructor(private sharedDataService: SharedDataService) {
        console.log(this.message);
    }
    sendMessage() {
        console.log("Sending message:", this.message);
        this.sharedDataService.changeMessage(this.message);
    }

}