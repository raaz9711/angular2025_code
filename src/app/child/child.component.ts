import { Component, inject } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
    viewProviders: [{provide:AnimalService, useValue: {emoji: '🐶'}}],
  
})
export class ChildComponent {
  animal = inject(AnimalService);

}
