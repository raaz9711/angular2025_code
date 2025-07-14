import { Component, inject } from '@angular/core';
import { GrandChildComponent } from "../grand-child/grand-child.component";
import { FreeapiService } from '../freeapi.service';

@Component({
  selector: 'app-child',
  imports: [GrandChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
  
})
export class ChildComponent {
constructor(private freeapiService: FreeapiService) {
}
list:any[] = [];
ngOnInit() {
  this.freeapiService.getPosts()
  .subscribe({
    next: (data) => {
      this.list = data;
    },
    error: (error) => {
      console.error('Error fetching posts:', error);
    }
  });
}
}
