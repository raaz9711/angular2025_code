import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./blackbox/input/parent";
import { Parent2Component } from "./blackbox/output/parent2";
import { DashboardComponent } from "./blackbox/view/parentstopwatch";
import { ExamChildComponent } from "./blackbox/view/example/exam-child";
import { ChildComponent } from "./blackbox/view/example/add-dyn";

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, ExamChildComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

}
