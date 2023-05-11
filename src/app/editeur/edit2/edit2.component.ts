import { Component, Input, OnInit } from '@angular/core';
import { CV } from 'src/app/models/CV';
@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.component.html',
  styleUrls: ['./edit2.component.scss'],
})
export class Edit2Component implements OnInit {
  @Input() monCV: CV;
  isCollapsed = true;
  isCollapsedExperience = false;
  isCollapsedEducation = false;
  isCollapsedCompetences = true;
  name: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
  tabbleauCompetences = [];

  experiences: any[] = [];
  educations: any[] = [];
  competences: any[] = [];
  inputValueCompetences: string;
  constructor() {}
  ngOnInit(): void {
    console.log(this.monCV);
  }

  ajouterForm(tab: any) {
    tab.push({});
  }

  addCompetences(input: string) {
    event.preventDefault(); // prevent the default form submission behavior
    console.log('value', input);

    console.log('index', this.tabbleauCompetences.indexOf(input));

    if (this.tabbleauCompetences.indexOf(input) == -1) {
      this.tabbleauCompetences.push(input);
    }
    input = '';
    console.log(this.tabbleauCompetences);
  }

  removeCompetences(hash: string) {
    const index = this.tabbleauCompetences.indexOf(hash);
    console.log('innnddd', index);

    if (index !== -1) {
      this.tabbleauCompetences.splice(index, 1);
    }
  }
}
