import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-output-child",
  template: `<p> child component <button (click) = "sendData()">Send Data</button> | {{childData}}</p>`
})
export class OutputChildComponent {
  // Component logic can be added here
  childData: string = 'Child Data';
  @Output('name') childDataSend = new EventEmitter<string>();

  sendData() {
    this.childData = 'Child Data Updated' + new Date().toLocaleTimeString();
    this.childDataSend.emit(this.childData);
  } 

}
