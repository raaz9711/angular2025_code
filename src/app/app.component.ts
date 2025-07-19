import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeComComponent } from "./pipes/pipe-com.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PipeComComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

}
