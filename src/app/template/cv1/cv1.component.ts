import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv1',
  templateUrl: './cv1.component.html',
  styleUrls: ['./cv1.component.scss'],
})
export class Cv1Component implements OnInit {
  ngOnInit(): void {
    console.log('this', this.selectedColor);
  }
  selectedColor = '#563d7c';
  selectedColorTitle = '#563d7c';

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
