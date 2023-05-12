import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { CVService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv1',
  templateUrl: './cv1.component.html',
  styleUrls: ['./cv1.component.scss'],
})
export class Cv1Component implements OnInit {
  @ViewChild('content', { static: false }) content: ElementRef;
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

  generatePdf() {
    const doc = new jsPDF();
    const htmlContent = this.content.nativeElement;

    html2canvas(htmlContent).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgProps = doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      doc.save('document.pdf');
    });
  }
}
