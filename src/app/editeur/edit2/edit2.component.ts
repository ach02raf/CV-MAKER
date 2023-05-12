import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CV } from 'src/app/models/CV';
import { competence } from 'src/app/models/Competence';
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

  myForm: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.myForm = new FormGroup({
      titrePoste: new FormControl('', Validators.required),
      entreprise: new FormControl('', Validators.required),
      dateDeb: new FormControl('', Validators.required),
      dateFin: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      diplome: new FormControl('', Validators.required),
      etablissement: new FormControl('', Validators.required),
      dateDebEdu: new FormControl('', Validators.required),
      dateFinEdu: new FormControl('', Validators.required),
      mention: new FormControl('', Validators.required),
    });
  }

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
  async updatePorcent(event: any, comp: any) {
    const indexToUpdate = this.monCV.competences.findIndex(
      (obj) => obj.nom === comp.nom
    );
    if (indexToUpdate !== -1) {
      this.monCV.competences[indexToUpdate].porcent = await (
        event.target.value * 10
      ).toString();
    }
  }

  async addCompetences(input: any) {
    event.preventDefault(); // prevent the default form submission behavior
    const indexToUpdate = this.monCV.competences.findIndex(
      (obj) => obj.nom === input.target.value
    );
    if (indexToUpdate === -1) {
      let comp = new competence(input.target.value, '50');
      this.monCV.competences.push(comp);
    }
    input.target.value = '';
  }

  removeCompetences(hash: any) {
    const indexToUpdate = this.monCV.competences.findIndex(
      (obj) => obj.nom === hash.nom
    );
    if (indexToUpdate !== -1) {
      this.monCV.competences.splice(indexToUpdate, 1);
    }
  }
}
