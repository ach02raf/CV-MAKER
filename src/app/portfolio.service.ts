import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }


  private data = new BehaviorSubject<any>('');

  setData(value: any) {
    this.data.next(value);
  }

  getData() {
    return this.data.asObservable();
  }
}
