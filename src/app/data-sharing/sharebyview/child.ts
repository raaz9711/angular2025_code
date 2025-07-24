import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `<p>Child component value: {{ value }}</p>`
})
export class ChildViewComponent {
  value = 'Initial Child Value';

  changeValue(newValue: string) {
    this.value = newValue;
  }
}
