import { Component } from "@angular/core";
import { OutputChildComponent } from "./child";
@Component({
  selector: "app-output-parent",
  imports: [OutputChildComponent],
  template: `<h1>Parent</h1>
    <p>Message from child: {{message}}</p>
  <app-output-child (name)="receivedData($event)"></app-output-child>
  `
})
export class OutputParentComponent {
  // Component logic can be added here
  message: string = '';
    receivedData($event: string) {
        this.message = $event;
        console.log('Received from child:', this.message);
    }
}
