import {
  Component,
  ChangeDetectorRef,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CVService } from '../services/cv.service';

@Component({
  selector: 'app-generator-cv',
  templateUrl: './generator-cv.component.html',
  styleUrls: ['./generator-cv.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [CVService],
})
export class GeneratorCvComponent implements OnInit {
  constructor(private ref: ChangeDetectorRef, private cvService: CVService) {}
  ngOnInit(): void {
    this.ref.detectChanges();
  }
  active = 1;
  isCollapsed = true;
  hidden = false;

  hide() {
    this.hidden = true;
    this.ref.detectChanges();
  }
  ja() {
    console.log(this.cvService.monCV);
  }
  show() {
    this.hidden = !this.hidden;
    this.isCollapsed = !this.isCollapsed;
    this.ref.detectChanges();
    return this.hidden;
  }
}
