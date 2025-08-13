import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { SearchPipe } from './pipes/assignments/search-by-key/search.pipe';
import { SortPipe } from './pipes/assignments/sort/sort.pipe';
import { TimeagoPipe } from './pipes/assignments/relativetime/timeago.pipe';

@Component({
  selector: 'app-root',
  imports: [NgFor,SearchPipe,SortPipe,AsyncPipe,TimeagoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

 date = new Date();
 currentMillis = this.date.getTime();

// Add 30 minutes (30 * 60 * 1000 milliseconds)
 newMillis = this.currentMillis - (90 * 60 * 1000);
d = this.date.setTime(this.newMillis).toString();



  users :{name : string,email:string}[] = [
    {name:'raj',email:'raj.kumar@xyz.com'},
    {name:'alex',email:'alex.idk@xyz.com'},
    {name:'max',email:'aleb.idc@xyz.com'}

  ] 

}
