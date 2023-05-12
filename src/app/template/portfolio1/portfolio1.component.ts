import { Component, OnInit , Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-portfolio1',
  templateUrl: './portfolio1.component.html',
  styleUrls: ['./portfolio1.component.css']
})
export class Portfolio1Component implements OnInit {

  @Input() data: any;
  ngOnInit(): void {
    // Initialization logic here
  }
   gfg = true;

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission here
  }

/*   data = {

     name :  "maha" ,
     lastName : " grindi",
     bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora explicabo quae quod deserunt eius sapiente solutions for complex problems",

     socials : [{Linkedin : "https://www.linkedin.com/"} , { instagram : "https://www.linkedin.com/" },{twitter:"https://www.linkedin.com/"},{gitHub :"https://www.linkedin.com/"}],
     project : [ { id: 1 , disc : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic     facilis tempora, explicabo quae quod deserunt eius sapiente     praesentium."}, { id: 2 , disc : "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic     facilis tempora, explicabo quae quod deserunt eius sapiente     praesentium."} ],
     projectText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora explicabo quae quod deserunt eius sapiente",
     aboutMe : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis     tempora explicabo quae quod deserunt eius sapiente",
     skills : ["HTML","css", "JavaScript","React","SASS","Wordpress","Google ADS","Facebook Ads"],
     aboutcontent : " I'm a bit of a digital product junky. Over the years, I've used     hundreds of web and mobile apps in different industries and     verticals. Feel free to"
  }
 */

  getSocialKey(social: any): string {
    return Object.keys(social)[0];
  }


}
