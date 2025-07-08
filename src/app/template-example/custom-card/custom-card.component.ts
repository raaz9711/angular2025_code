import { Component } from '@angular/core';

@Component({
  selector: 'custom-card',
  template: '<div class="card-shadow"> <ng-content></ng-content></div>',
})
export class CustomCard {/* ... */}