import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { FreeapiService } from './freeapi.service';

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FreeapiService]
})
export class AppComponent {
  

  title = 'code2025';

}
