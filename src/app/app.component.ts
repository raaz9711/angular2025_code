import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FreeapiService } from './freeapi.service';
import { sortByKeys } from './logger.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FreeapiService]
})
export class AppComponent {
  

  title = 'code2025';

   users:{firstName :string,lastName:string}[] = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Alice', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Doe' }
];

// Sort by lastName, then firstName
 sorted = sortByKeys(this.users, 'lastName', 'firstName');

}
