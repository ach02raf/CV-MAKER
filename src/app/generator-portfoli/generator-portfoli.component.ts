import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  form: FormGroup;
  fields: any[] = [];
  fields2: any[] = [];
  imageUrl: string = '../../../assets/image_placeholder.jpg';
  projects: { urlImage: string } = { urlImage: '' };
  tabbleauCompetences = [];

  experiences: any[] = [];
  educations: any[] = [];
  monPortfolio: { Skills: string[] } = { Skills: [] };
  isCollapsedaboutme = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      bio: ['', Validators.required],
      parg1: ['', Validators.required],
      parg2: ['', Validators.required],
      skills : ['', Validators.required]
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
    const foundObj = this.monPortfolio.Skills.find(
      (obj) => obj === input.target.value
    );
    if (foundObj) {
      input.target.value = '';
    } else {
      event.preventDefault(); // prevent the default form submission behavior
      if (this.monPortfolio.Skills.indexOf(input.target.value) == -1) {
        this.monPortfolio.Skills.push(input.target.value);


        console.log('====================================');
        console.log(input);
        console.log('====================================');
      }
      input.target.value = '';
    }
  }

  removeSkills(hash: string) {
    const index = this.monPortfolio.Skills.indexOf(hash);
    if (index !== -1) {
      this.monPortfolio.Skills.splice(index, 1);
    }
  }
  onSubmit() {
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

const outputObject = {
  name: this.form.value.name,
  email: this.form.value.email,
  prenom: this.form.value.prenom,
  tel: this.form.value.tel,
  bio: this.form.value.bio,
  Links: links
};


console.log('====================================');
console.log(outputObject);
console.log('====================================');

  }


  onSubmit2(){
    console.log("ho " , this.form.value);

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
      selected: 'GitHub',
      value: '',
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


  ajouterForm(tab: any) {
    tab.push({});
  }


}
