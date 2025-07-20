import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeComComponent } from "./pipes/pipe-com.component";
import { AppComponentParent } from "./services/app-component-parent";
import { AppParentComponent1 } from "./services/assignment1/app-component-p-1";

@Component({
  selector: 'app-root',
  imports: [ AppParentComponent1],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

}
