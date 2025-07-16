import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from '../directive/highlight.directive';
import { HideAfterDirective } from '../directive/structrual/hide-after.directive';
import { BuiltInExamComponent } from "../directive/built-directive-example/built-in-exam.component";
@Component({
  selector: 'app-root',
  imports: [
    //HighlightDirective,
    HideAfterDirective,
    BuiltInExamComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

  color = 'lightblue';

}
