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
import { HostComponent } from "./blackbox/viewref/host/host.component";
import { Assignment4Component } from "./blackbox/view/assignment/assignment4/assignment4.component";
import { Assignment5Component } from "./blackbox/view/assignment/assignment5/assignment5.component";
import { Assignment6Component } from "./blackbox/view/assignment/assignment6/assignment6.component";
import { CardComponent } from "./blackbox/view/assignment/assignment7/app7";
import { ScrollDemoComponent } from "./blackbox/view/assignment/assignment8/app8";
import { TogglePanelComponent } from "./blackbox/view/assignment/app9/app9";
import { CaretParentComponent } from "./blackbox/view/assignment/app10/app10";

@Component({
  selector: 'app-root',
  imports: [Assignment1Component, Assignment2Component, Assignment3Component, HostComponent, Assignment4Component, Assignment5Component, Assignment6Component, CardComponent, ScrollDemoComponent, TogglePanelComponent, CaretParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

}
