import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Assignment1Service } from "./assignment1.service";
import { Assignment2Service } from "./assignment2.service";

@Component({
  selector: "app-component-a-1",
  template: `
<h3>Component A</h3>
<input [(ngModel)]="user.name" placeholder="Enter message">
<br>
<input [(ngModel)]="user.age" placeholder="Enter message">

<button (click)="update()">Update</button>
<p>----=============-------</p>
<input ngModel [(ngModel)]="mesage" placeholder="Enter message">
<button (click)="addMessage(mesage)">Add Message</button>
<button (click)="clearMessages()">Clear Messages</button>
  `,
  imports: [FormsModule]
})
export class AppComponentA1 {
user:{name: string, age: number} = {name: "John", age: 30};
mesage: string = "";
    
    constructor( private service : Assignment1Service,private s2 : Assignment2Service) {
    }
    update() {
      this.service.updateData(this.user.name, this.user.age);
    }
addMessage(message: string) {
    this.s2.addMessage(message);  }
clearMessages() {
    this.s2.clearMessages();
  }


}