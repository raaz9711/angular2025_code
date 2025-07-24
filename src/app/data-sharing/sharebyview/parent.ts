import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChildViewComponent } from './child';
@Component({
  selector: 'app-view-parent',
    imports: [ChildViewComponent],
  template: `
    <app-view-child></app-view-child>
    <button (click)="updateChild()">Update Child</button>
  `
})
export class ParentViewComponent implements AfterViewInit {
  @ViewChild(ChildViewComponent) child!: ChildViewComponent;

  ngAfterViewInit() {
    console.log('Child initial value:', this.child.value);
  }

  updateChild() {
    if (!this.child) {
      console.error('Child component is not initialized yet.');
      return;
    }
    console.log('Updating child component value...');
    // Call the method to change the child's value
    // This will also trigger change detection in the child component
    // and update its view accordingly.
    // Ensure that the child component is initialized before calling this method.
    if (!this.child.changeValue) {
      console.error('Child component method changeValue is not available.');
      return;
    }
    // Update the child's value and log the new value       

    let newValue = 'Updated Value from Parent at ' + new Date().toLocaleTimeString();
    console.log('New value to set:', newValue);
    // Call the method to change the child's value
    this.child.changeValue(newValue);
    console.log('Child updated value:', this.child.value);
  }
}
