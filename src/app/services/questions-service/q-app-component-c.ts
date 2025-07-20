import { Component, OnInit } from "@angular/core";
import { QSharedDataService } from "./q-shared-data.service";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "q-app-component-c",
  template: `
<h3>Q Component C</h3>
<p>Message A: {{ messageA }}</p>
<p>Message B: {{ messageB }}</p>    
`,
imports: [FormsModule]

})
export class QAppComponentC implements OnInit {
    messageA: string = "A";
    messageB: string = "A";

    constructor(private sharedDataService: QSharedDataService) {
    }
    sendMessage() {
    }
    ngOnInit() {
        console.log("QAppComponentB initialized");
        this.sharedDataService.messageA.subscribe(message => {
        this.messageA = message;});

        this.sharedDataService.messageB.subscribe(message => {
        this.messageB = message;});
    }
}