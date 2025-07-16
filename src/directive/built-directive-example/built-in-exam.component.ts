import { NgClass, NgFor, NgIf, NgPlural, NgPluralCase, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-built-in-exam',
  imports: [NgIf,NgFor,NgClass,NgStyle,NgPlural,NgPluralCase,NgTemplateOutlet],
  templateUrl: './built-in-exam.component.html',
  styleUrl: './built-in-exam.component.css'
})
export class BuiltInExamComponent {

  products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
  ];

  items = [
    { id: 1, name: 'Item 1', active: true },
    { id: 2, name: 'Item 2', active: false },
    { id: 3, name: 'Item 3', active: true }
  ];


  textColor = 'blue';
  fontSize = '20px';

  updaefontSize() {
    let size =  Number(this.fontSize.replace('px', '') || 0);
    size += 2;
    this.fontSize = size + 'px';
    console.log('Font size updated to:', this.fontSize);
  }

  isActive = true;

  isLoggedIn = false;

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  removeitem() {
    this.items.pop();
    console.log('Last item removed. Remaining items:', this.items);
  }
}
