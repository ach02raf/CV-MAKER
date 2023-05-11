import { Component, Input, OnInit } from '@angular/core';
import { CV } from 'src/app/models/CV';
import { Education } from 'src/app/models/Education';
import { ExperienceProfessionnelle } from 'src/app/models/ExperienceProfessionnelle';
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
  ngOnInit(): void {}

  async ajouterForm(tab: any, source: any) {
    if (source === 'experience') {
      let exp = new ExperienceProfessionnelle();
      await tab.push(exp);
    } else {
      let edu = new Education();
      await tab.push(edu);
    }
  }
  supprimerForm(tab: any[], index: any) {
    tab.splice(index, 1);
  }
  addCompetences(input: any) {
    event.preventDefault(); // prevent the default form submission behavior
    const foundObj = this.monCV.competences.find(
      (obj) => obj === input.target.value
    );
    if (foundObj) {
      input.target.value = '';
    } else {
      event.preventDefault(); // prevent the default form submission behavior
      if (this.monCV.competences.indexOf(input.target.value) == -1) {
        this.monCV.competences.push(input.target.value);
      }
      input.target.value = '';
    }
  }

  removeCompetences(hash: string) {
    const index = this.monCV.competences.indexOf(hash);
    if (index !== -1) {
      this.monCV.competences.splice(index, 1);
    }
  }
}
