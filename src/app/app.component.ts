import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { SearchPipe } from './pipes/assignments/search-by-key/search.pipe';
import { SortPipe } from './pipes/assignments/sort/sort.pipe';

@Component({
  selector: 'app-root',
  imports: [NgFor,SearchPipe,SortPipe,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'code2025';

  users :{name : string,email:string}[] = [
    {name:'raj',email:'raj.kumar@xyz.com'},
    {name:'alex',email:'alex.idk@xyz.com'},
    {name:'max',email:'aleb.idc@xyz.com'}

  ] 

}
