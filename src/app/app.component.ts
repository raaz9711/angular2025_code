import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputMainComponent } from './data-sharing/input_data/input.main';
import { OutputMainComponent } from './data-sharing/output_data/output.main';
import { AComponent } from "./data-sharing/service_data/a-component";
import { BComponent } from "./data-sharing/service_data/b-component";
import { ParentViewComponent } from './data-sharing/sharebyview/parent';
import { CounterAComponent } from "./ngrx/a-ngrx-component";
import { CounterBComponent } from "./ngrx/b-ngrx-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputMainComponent, OutputMainComponent, AComponent, BComponent, ParentViewComponent, CounterAComponent, CounterBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

}
