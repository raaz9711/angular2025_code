import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Assignment1Service {

  private data = new BehaviorSubject({ name: '', age: 0 });

  data$ = this.data.asObservable();

  updateData(name: string, age: number) {
    
    this.data.next({ name, age });
    console.log("Data updated in Assignment1Service:", { name, age });
  }


  constructor() { }
}
