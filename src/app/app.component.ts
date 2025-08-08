import { Component,OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FreeapiService } from './freeapi.service';
import { sortByKeys } from './logger.service';
import { JsonPipe } from '@angular/common';
import { greet } from './typescript/fun';
import { Greeter } from './typescript/interface/user';
import { ChildComponent } from "./child/child.component";
import { StatusCode } from './child/model';

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FreeapiService]
})
export class AppComponent  implements OnInit {
 
  numbers : Number[] =[]

  strings : string[] = []

  mix: (string | number)[] = ['Raj',1]

ngOnInit(): void {
console.log(greet('raj'));
  
}

ee : StatusCode = StatusCode.NOT_FOUND;

}
