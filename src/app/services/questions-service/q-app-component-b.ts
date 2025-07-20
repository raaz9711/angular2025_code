import { Component, OnInit } from "@angular/core";
import { QSharedDataService } from "./q-shared-data.service";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "q-app-component-b",
  template: `
<h3>Q Component B</h3>
<input [(ngModel)]="message" placeholder="Enter message">
<button (click)="sendMessage()">Send to Component B</button>
<p>Message from A: {{ Displaymessage }}</p>
`,
imports: [FormsModule]

})
export class QAppComponentB implements OnInit {
    message: string = "Hello from Component B";
    Displaymessage: string = "Hello from Component B";
    constructor(private sharedDataService: QSharedDataService) {
        console.log(this.message);
    }
    sendMessage() {
        console.log("Sending message From B:", this.message);
        this.sharedDataService.changeMessage(this.message,true);
    }
    ngOnInit() {
        console.log("QAppComponentB initialized");
        this.sharedDataService.messageA.subscribe(message => {
            console.log("Received message A:", message);
        this.Displaymessage = message
        });
    }
}