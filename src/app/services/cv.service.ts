import { Injectable } from '@angular/core';
import { CV } from '../models/CV';
@Injectable({
  providedIn: 'root',
})
export class CVService {
  monCV: CV;
  constructor() {}
}
