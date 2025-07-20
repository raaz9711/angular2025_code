import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Assignment2Service {

private messages = new BehaviorSubject<string[]>([]);

messages$ = this.messages.asObservable();

addMessage(message: string) {
    const currentMessages = this.messages.getValue();
    this.messages.next([...currentMessages, message]);
    console.log("Message added in Assignment2Service:", message);
}

clearMessages() {
    this.messages.next([]);
    console.log("All messages cleared in Assignment2Service");
}

  constructor() { }
}
