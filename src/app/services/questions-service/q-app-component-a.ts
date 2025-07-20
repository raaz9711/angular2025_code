import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { QSharedDataService } from "./q-shared-data.service";

@Component({
  selector: "q-app-component-a",
  template: `
<h3>Q Component A</h3>
<input [(ngModel)]="message" placeholder="Enter message">
<button (click)="sendMessage()">Send to Component B</button>
<p>Received in A: {{ Displaymessage }}</p>
  `,
  imports: [FormsModule]
})
export class QAppComponentA  implements OnInit {
    message: string = "Hello from Component A";
    Displaymessage: string = "Hello from Component A";

    
    constructor(private sharedDataService: QSharedDataService) {
        console.log(this.message);
    }
    sendMessage() {
        console.log("Sending message from A:", this.message);
        this.sharedDataService.changeMessage(this.message,false);
    }
    ngOnInit() {
        console.log("QAppComponentA initialized");
        this.sharedDataService.messageB.subscribe(message => {
            console.log("Received message in A:", message);
            this.Displaymessage = message;
        });
      }


}