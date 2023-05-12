import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PortfolioService} from './../portfolio.service';
import { ExperienceProfessionnelle } from 'src/app/models/ExperienceProfessionnelle';
import { Education } from 'src/app/models/Education';

@Component({
  selector: 'app-generator-portfoli',
  templateUrl: './generator-portfoli.component.html',
  styleUrls: ['./generator-portfoli.component.sass']
})
export class GeneratorPortfoliComponent implements OnInit {

  active = 1;
  hidden = false;
  isCollapsedcordonnee = true;
  isCollapsedProject = true ;
  isCollapsedExperience = true ;
  isCollapsedEducation = true ;
   projectsList = [];
  form: FormGroup;
  fields: any[] = [];
  fields2: any[] = [];
  imageUrl: string = '../../../assets/image_placeholder.jpg';
  projects: { urlImage: string } = { urlImage: '' };
  tabbleauCompetences = [];

  experiences: any[] = [];
  educations: any[] = [];
  monPortfolio: {
    experiencesPro: {
      titrePoste: string,
      entreprise: string,
      dateDebut: string,
      dateFin: string,
      desc: string
    }[],
    educations: {
      diplome: string,
      etablissement: string,
      dateDebut: string,
      dateFin: string,
      mention: string
    }[],
    skills: string[]
  } = {
    experiencesPro: [],
    educations: [],
    skills: []
  };

  isCollapsedaboutme = true;

  constructor(private formBuilder: FormBuilder , private router: Router , private portfolioService :PortfolioService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      bio: ['', Validators.required],
      parg1: ['', Validators.required],
      parg2: ['', Validators.required],
      skills : ['', Validators.required],
      projects:[],
    });
  }

  hide() {
    this.hidden = true;
  }

  addField() {

    const field = {
      selected: 'GitHub',
      value: ''
    };

    this.fields.push(field);
    this.form.addControl(`selected_${this.fields.length}`, this.formBuilder.control(field.selected));
    this.form.addControl(`field_${this.fields.length}`, this.formBuilder.control(field.value, Validators.required));
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
    this.form.removeControl(`selected_${index + 1}`);
    this.form.removeControl(`field_${index + 1}`);
  }

  addSkills(input: any) {
    const foundObj = this.monPortfolio.skills.find(
      (obj) => obj === input.target.value
    );
    if (foundObj) {
      input.target.value = '';
    } else {
      event.preventDefault(); // prevent the default form submission behavior
      if (this.monPortfolio.skills.indexOf(input.target.value) == -1) {
        this.monPortfolio.skills.push(input.target.value);
       }
      input.target.value = '';
    }
  }

  removeSkills(hash: string) {
    const index = this.monPortfolio.skills.indexOf(hash);
    if (index !== -1) {
      this.monPortfolio.skills.splice(index, 1);
    }
  }



  onFileSelected(event, index): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fields2[index].imageUrl = reader.result as string;
    };
  }


  addField2() {
    const field2 = {
      title: '',
      description: '',
      link: '',
      imageUrl: '../../../assets/image_placeholder.jpg'
    };
    this.fields2.push(field2);
    this.form.addControl(`title_${this.fields2.length - 1}`, this.formBuilder.control(field2.title));
    this.form.addControl(`description_${this.fields2.length - 1}`, this.formBuilder.control(field2.description));
    this.form.addControl(`link_${this.fields2.length - 1}`, this.formBuilder.control(field2.link));
  }

  removeField2(index: number) {
    this.fields2.splice(index, 1);
    this.form.removeControl(`selected_${index + 1}`);
    this.form.removeControl(`field_${index + 1}`);
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

  submitNext(){

    const links = [];

    if (this.form.value.field_1 && this.form.value.selected_1) {
      links.push({ UrlName: this.form.value.selected_1, value: this.form.value.field_1 });
    }

    if (this.form.value.field_2 && this.form.value.selected_2) {
      links.push({ UrlName: this.form.value.selected_2, value: this.form.value.field_2 });
    }

    if (this.form.value.field_3 && this.form.value.selected_3) {
      links.push({ UrlName: this.form.value.selected_3, value: this.form.value.field_3 });
    }

    if (this.form.value.field_4 && this.form.value.selected_4) {
      links.push({ UrlName: this.form.value.selected_4, value: this.form.value.field_4 });
    }

    for (let i = 0; i < this.fields2.length; i++) {
      const project = {
        title: this.form.get(`title_${i}`).value,
        description: this.form.get(`description_${i}`).value,
        link: this.form.get(`link_${i}`).value,
        imageUrl: this.fields2[i].imageUrl
      };
      this.projectsList.push(project);
    }
    const outputObject = {
      name: this.form.value.name,
      email: this.form.value.email,
      prenom: this.form.value.prenom,
      tel: this.form.value.tel,
      bio: this.form.value.bio,
      Links: links ,
      Skills : this.monPortfolio.skills,
      parg1 : this.form.value.parg1 ,
      parg2: this.form.value.parg2,
      project : this.projectsList ,
      educations : this.monPortfolio.educations ,
      experiences : this.monPortfolio.experiencesPro ,
    };

    console.log("outputObject" , outputObject );
     this.portfolioService.setData(outputObject);
    this.router.navigate(['/portfolio/portfolioreviw']);
  }

}
