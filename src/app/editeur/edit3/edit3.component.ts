import { Component, Input, OnInit } from '@angular/core';
import { CV } from 'src/app/models/CV';

@Component({
  selector: 'app-edit3',
  templateUrl: './edit3.component.html',
  styleUrls: ['./edit3.component.scss'],
})
export class Edit3Component implements OnInit {
  @Input() monCV: CV;
  ngOnInit(): void {}
}
