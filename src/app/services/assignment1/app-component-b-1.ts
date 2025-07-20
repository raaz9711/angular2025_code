import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Assignment1Service } from "./assignment1.service";
import { Assignment2Service } from "./assignment2.service";
import { NgFor } from "@angular/common";
@Component({
  selector: "app-component-b-1",
  template: `
<h3>Q Component B</h3>
<p>User Name: {{ user.name }}</p>
<p>User Age: {{ user.age }}</p>
<p>----=============-------</p>
<p>Messages:</p>
<ul>
  <li *ngFor="let message of messages">{{ message }}</li>
</ul>
`,
imports: [FormsModule,NgFor]

})
export class AppComponentB1 implements OnInit {
    user: { name: string, age: number } = { name: "John", age: 30 };
messages: string[] = [];
    constructor(private someService: Assignment1Service,private s2 : Assignment2Service) {}
   
    ngOnInit() {
        console.log("QAppComponentB initialized");

        this.someService.data$.subscribe(data => {
            this.user.name = data.name;
            this.user.age = data.age;
            console.log("Data received in QAppComponentB:", this.user);
        })

        this.s2.messages$.subscribe(messages => {
            console.log("Messages in QAppComponentB:", messages);
            this.messages = messages;
        });
      
      }
}