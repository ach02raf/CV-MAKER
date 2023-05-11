import {
  Component,
  ChangeDetectorRef,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-generator-cv',
  templateUrl: './generator-cv.component.html',
  styleUrls: ['./generator-cv.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class GeneratorCvComponent implements OnInit {
  constructor(private ref: ChangeDetectorRef) {}
  ngOnInit(): void {}
  active = 1;
  isCollapsed = true;
  hidden = false;

  hide() {
    this.hidden = true;
    this.ref.detectChanges();
  }
  show() {
    this.hidden = !this.hidden;
    this.isCollapsed = !this.isCollapsed;
    console.log('this.hidden', this.hidden);
    console.log('this.isCollapsed', this.isCollapsed);

    this.ref.detectChanges();
    return this.hidden;
  }
}
