import { Component, OnInit } from '@angular/core';
import { CVService } from '../services/cv.service';

@Component({
  selector: 'app-generator-cv',
  templateUrl: './generator-cv.component.html',
  styleUrls: ['./generator-cv.component.scss'],

  providers: [CVService],
})
export class GeneratorCvComponent implements OnInit {
  constructor(private cvService: CVService) {}
  ngOnInit(): void {}
  active = 1;
  isCollapsed = true;
  hidden = false;

  hide() {
    this.hidden = true;
  }
  ja() {
    console.log(this.cvService.monCV);
  }
  show() {
    this.hidden = !this.hidden;
    this.isCollapsed = !this.isCollapsed;

    return this.hidden;
  }
}
