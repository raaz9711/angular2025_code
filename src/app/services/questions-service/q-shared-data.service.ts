import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QSharedDataService {

  private messageSourceA = new Subject<string>();
  private messageSourceB = new Subject<string>();

  //private messageSource = new ReplaySubject<string>(2); 

  messageA = this.messageSourceA.asObservable();
  messageB = this.messageSourceB.asObservable();


  changeMessage(message: string, isFromA: boolean) {
    if (isFromA) {
      console.log("Changing message for A:", message);
      this.messageSourceB.next(message);
    } else {
      console.log("Changing message for B:", message);
      this.messageSourceA.next(message);
    }
  }

  constructor() { }
}
