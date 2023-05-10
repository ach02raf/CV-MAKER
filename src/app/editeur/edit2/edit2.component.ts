import { Component } from '@angular/core';
@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.component.html',
  styleUrls: ['./edit2.component.scss'],
})
export class Edit2Component {
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

  ajouterForm(tab: any) {
    tab.push({});
  }

  addCompetences(inpu: string) {
    if (this.tabbleauCompetences.indexOf(inpu) == -1) {
      this.tabbleauCompetences.push(inpu);
    }
    inpu = '';
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
