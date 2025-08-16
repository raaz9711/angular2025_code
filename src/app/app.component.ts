import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./blackbox/input/parent";
import { Parent2Component } from "./blackbox/output/parent2";
import { DashboardComponent } from "./blackbox/view/parentstopwatch";
import { ExamChildComponent } from "./blackbox/view/example/exam-child";
import { ChildComponent } from "./blackbox/view/example/add-dyn";
import { Assignment1Component } from './blackbox/view/assignment/assignment1/assignment1.component';
import { Assignment2Component } from "./blackbox/view/assignment/assignment2/assignment2.component";
import { Assignment3Component } from "./blackbox/view/assignment/assignment3/assignment3.component";

@Component({
  selector: 'app-root',
  imports: [Assignment1Component, Assignment2Component, Assignment3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

}
