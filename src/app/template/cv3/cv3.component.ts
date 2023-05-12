import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CVService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv3',
  templateUrl: './cv3.component.html',
  styleUrls: ['./cv3.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Cv3Component implements OnInit {
  name: string = 'stephen colbert';
  job: string = 'Designer';
  address: string = '21 Street, Texas';
  nationality: string = 'USA';
  phone: number = 4445678;
  email: string = 'stephen@gmail.com';
  webSite: string = 'www.stephen.com';
  constructor(private ref: ChangeDetectorRef, protected cvService: CVService) {}
  ngOnInit(): void {
    console.log(this.cvService.monCV);
    this.ref.detectChanges();
  }
  affecterClass(st: any) {
    switch (st) {
      case 'website':
        return 'fab fa-weebly';
      case 'Linkedin':
        return 'fab fa-linkedin';
      case 'Behance':
        return 'fab fa-behance';
      case 'Github':
        return 'fab fa-github';
    }
    return '';
  }
}
