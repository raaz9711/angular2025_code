import { Component, inject } from "@angular/core";
import { ServicedataService } from "./servicedata.service";
import { dateTimestampProvider } from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-a-component',
  template:`<div>
    <h1>Component A</h1>
    <p> Data | <span>{{ data }}</span> </p>
    <button (click)="updateData()">Update Data</button>
  </div>`,
})

export class AComponent {
  data: string = 'Initial Data';

  serviceData = inject(ServicedataService);

  updateData() {
    this.serviceData.changeData('Updated Data from Component A'+ ' at ' + new Date().toLocaleTimeString() + ' on ' + new Date().toLocaleDateString());
  }
}
