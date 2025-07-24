import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {

  private data = new BehaviorSubject<string>('Initial Data');
  currentData = this.data.asObservable();

  changeData(newData: string) {
    this.data.next(newData);
  }

  constructor() { }
}
