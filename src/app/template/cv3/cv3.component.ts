import { Component } from '@angular/core';

@Component({
  selector: 'app-cv3',
  templateUrl: './cv3.component.html',
  styleUrls: ['./cv3.component.scss'],
})
export class Cv3Component {
  name: string = 'stephen colbert';
  job: string = 'Designer';
  address: string = '21 Street, Texas';
  nationality: string = 'USA';
  phone: number = 4445678;
  email: string = 'stephen@gmail.com';
  webSite: string = 'www.stephen.com';
  skills = [
    { name: 'CSS', porcent: '70%' },
    { name: 'HTML', porcent: '80%' },
    { name: 'SASS', porcent: '90%' },
    { name: 'JS', porcent: '60%' },
    { name: 'JQUERY', porcent: '100%' },
  ];
}
