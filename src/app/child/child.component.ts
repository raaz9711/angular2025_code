import { Component, Input, input } from '@angular/core';
import { ButtonSize } from './model';


@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {

  @Input() size: ButtonSize = "medium";

  

}
