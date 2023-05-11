import { Component, Input, OnInit } from '@angular/core';
import { CV } from 'src/app/models/CV';
@Component({
  selector: 'app-experince',
  templateUrl: './experince.component.html',
  styleUrls: ['./experince.component.sass']
})
export class ExperinceComponent implements OnInit {
  @Input() monCV: CV;
  isCollapsed2 = true;
  isCollapsedExperience = true;
  isCollapsedEducation = true;
  name: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
  tabbleauCompetences = [];

  experiences: any[] = [];
  educations: any[] = [];
  inputValueCompetences: string;
  ngOnInit(): void {
    console.log(this.monCV);
  }

  ajouterForm(tab: any) {
    tab.push({});
  }

 
}
