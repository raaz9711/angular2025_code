import { Component, inject } from "@angular/core";
import { ServicedataService } from "./servicedata.service";

@Component({
  selector: 'app-b-component',
  template:`<div>
    <h1>Component B</h1>
    <p> Data from A => | <span>{{ data }}</span> </p>
  </div>`,
})

export class BComponent {
  data: string = 'Initial Data';
  serviceData = inject(ServicedataService);

  constructor() {
    this.serviceData.currentData.subscribe(newData => {
      this.data = newData;
    });
  }
  
}
