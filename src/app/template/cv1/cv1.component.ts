import { Component, OnInit } from '@angular/core';
import { CVService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv1',
  templateUrl: './cv1.component.html',
  styleUrls: ['./cv1.component.scss'],
})
export class Cv1Component implements OnInit {
  ngOnInit(): void {
    console.log('this', this.selectedColor);
  }
  constructor(protected cvService: CVService) {}
  selectedColor = '#563d7c';
  selectedColorTitle = '#563d7c';
  name: string = 'stephen colbert';
  job: string = 'Designer';
  address: string = '21 Street, Texas';
  nationality: string = 'USA';
  phone: number = 4445678;
  email: string = 'stephen@gmail.com';
  webSite: string = 'www.stephen.com';

  updateColor() {
    console.log('this', this.selectedColor);

    document.documentElement.style.setProperty('--color', this.selectedColor);
    document.documentElement.style.setProperty(
      '--titleColor',
      this.selectedColorTitle
    );
    // const styleElement = document.createElement('style');
    // styleElement.innerHTML = `:root { --color: ${this.selectedColor}; }`;
    // document.head.appendChild(styleElement);
  }
}
