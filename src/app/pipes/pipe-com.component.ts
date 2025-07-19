import { JsonPipe, KeyValuePipe, NgFor, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipeNamePipe, FilterPipe, PhoneNumberFormatPipe, TruncatePipe } from './custom-pipe/custom-pipe-name.pipe';

@Component({
  selector: 'app-pipe-com',
  imports: [KeyValuePipe,JsonPipe,NgFor,SlicePipe,CustomPipeNamePipe,PhoneNumberFormatPipe,TruncatePipe,FilterPipe],
  templateUrl: './pipe-com.component.html',
  styleUrl: './pipe-com.component.css'
})
export class PipeComComponent {

  person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };

  persons = [
    { name: 'Alice', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 28, city: 'Chicago' },
    { name: 'Charlie', age: 35, city: 'Houston' }
  ];

  numbers = [1, 2, 3, 4, 5];



}
