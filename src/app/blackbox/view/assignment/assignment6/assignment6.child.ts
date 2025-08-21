import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-field',
  template: `<input type="text" #tmp />`
})
export class InputFieldComponent {

    @ViewChild('tmp',{static :false}) xy! : ElementRef<HTMLInputElement> ; 

  markAsTouched() {
    // Example: mark the field as touched (
    // for forms, you’d use FormControl)
    console.log(this.xy.nativeElement.value);
    console.log('Input field marked as touched');
  }
}