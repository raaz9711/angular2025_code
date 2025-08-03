import { Component,OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FreeapiService } from './freeapi.service';
import { sortByKeys } from './logger.service';
import { JsonPipe } from '@angular/common';
import { greet } from './typescript/fun';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FreeapiService]
})
export class AppComponent implements OnInit {
 
  user = 'rajkumar';

  title = 'code2025';

   users:{firstName :string,lastName:string}[] = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Alice', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Doe' }
];

// Sort by lastName, then firstName
 sorted = sortByKeys(this.users, 'lastName', 'firstName');

retGreet() {
this.user = greet(this.user);
}

multiply = (a: number, b: number): number => a * b;
add = (a: number, b: number): number => a + b;

//higher order function
operate = (a: number, b: number, operation: (a: number, b: number) => number): number => {
  return operation(a, b); }
  ngOnInit() {
console.log(this.operate(2, 3, this.multiply)); // Output: 6
console.log(this.operate(2, 3, this.add)); // Output: 5

console.log(this.productprices,'<>',this.discountedPrices)

console.log(this.sorthof(this.usernames,this.strcom))
console.log(this.sorthof(this.productprices,this.intcom))

  }

  strcom = (a: string , b:string) : number => a.localeCompare(b) 
  intcom = (a: number , b:number) : number => a - b

  usernames :string[] = ['rad','dasd','sadsadas'] 

 productprices :number[] = [100, 200,123, 300, 400, 500];
 discountedPrices = this.productprices.map(price => price * 0.9); // Apply 10% discount
 

 sorthof<T>(a: T[], fn: (a: T, b: T) => number): T[] {
   return a.sort(fn);
 }

 

}
