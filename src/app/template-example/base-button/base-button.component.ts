// ./base-button/base-button.component.ts
import { Component } from '@angular/core';
@Component({
  selector: 'button[baseButton]',
  template: `
      <ng-content />
  `,
})
export class BaseButton {}