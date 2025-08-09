import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NGComComponent } from "./form/ng-com";
import { ReactFormComponent } from "./form/react-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NGComComponent, ReactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

}
