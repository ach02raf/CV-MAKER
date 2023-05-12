import { Component, OnInit } from '@angular/core';
import { CV } from '../models/CV';
import { CVService } from '../services/cv.service';

@Component({
  selector: 'app-edit-nav',
  templateUrl: './edit-nav.component.html',
  styleUrls: ['./edit-nav.component.sass'],
})
export class EditNavComponent implements OnInit {
  active = 1;
  monCV: CV = new CV();
  constructor(private cvService: CVService) {}
  ngOnInit(): void {
    this.cvService.monCV = this.monCV;
  }
}
