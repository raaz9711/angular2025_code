import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./blackbox/parent";
import { Parent2Component } from "./blackbox/parent2";

@Component({
  selector: 'app-root',
  imports: [Parent2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

}
