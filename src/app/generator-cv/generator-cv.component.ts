import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CVService } from '../services/cv.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-generator-cv',
  templateUrl: './generator-cv.component.html',
  styleUrls: ['./generator-cv.component.scss'],

  providers: [CVService],
})
export class GeneratorCvComponent implements OnInit {
  constructor(private cvService: CVService) {}
  @ViewChild('content', { static: false }) content: ElementRef;
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
