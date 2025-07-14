import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from '../directive/highlight.directive';
@Component({
  selector: 'app-root',
  imports: [HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

  color = 'lightblue';

}
