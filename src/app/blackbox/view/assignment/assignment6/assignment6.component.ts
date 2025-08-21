import { Component, QueryList, ViewChildren } from '@angular/core';
import { InputFieldComponent } from './assignment6.child';

@Component({
  selector: 'app-assignment6',
  imports: [InputFieldComponent],
  templateUrl: './assignment6.component.html',
  styleUrl: './assignment6.component.css'
})
export class Assignment6Component {
@ViewChildren(InputFieldComponent) fields!: QueryList<InputFieldComponent>;

  ngAfterViewInit() {
    // You can access fields here
    console.log('',this.fields);
    
  }

  validateAll() {
    this.fields.forEach(field => field.markAsTouched());
  }
}
