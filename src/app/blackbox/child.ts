import { NgFor } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports:[NgFor],
  template: `
    <div>
      <!-- Child component content goes here -->
      <h2>Child Component</h2>
      <div>Changes</div>
      <ul>
        <li *ngFor = "let l of changeArr"> {{l}}</li>
</ul>
    </div>
  `,
  styles: [`
    div {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `]
})
export class ChildComponent  implements OnInit , OnChanges{


    ngOnChanges(changes: SimpleChanges): void {
        if(changes['content']){
  const change = changes['content'];
    console.log('Previous:', change.previousValue);
    console.log('Current:', change.currentValue);
    console.log('First change?', change.firstChange);
        this.changeArr.push(change.currentValue);
        }

    }

    @Input() content : string = ''

    changeArr : string[] = [];

    ngOnInit(): void {
        //this.changeArr.push(this.content)
    }
    


 }