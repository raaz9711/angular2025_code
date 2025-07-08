import { Component } from '@angular/core';
import { CustomCard } from "../custom-card/custom-card.component";

@Component({
  selector: 'app-template-example',
  imports: [CustomCard],
  templateUrl: './template-example.component.html',
  styleUrl: './template-example.component.css'
})
export class TemplateExampleComponent {

  isFormValid: boolean = true;
}
