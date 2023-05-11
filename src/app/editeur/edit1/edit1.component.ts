import { Component, Input, OnInit } from '@angular/core';
import { CV } from 'src/app/models/CV';
import { Liens } from 'src/app/models/Liens';

@Component({
  selector: 'app-edit1',
  templateUrl: './edit1.component.html',
  styleUrls: ['./edit1.component.sass'],
})
export class Edit1Component implements OnInit {
  @Input() monCV: CV;
  isCollapsed = true;
  isCollapsedcordonnee = true;
  isCollapsedliens = true;
  isCollapsedhobby = true;
  name: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string = '../../../assets/image_placeholder.jpg';

  tabbleauHobby = [];
  Hobby: any[] = [];
  inputValueHobby: string;
  constructor() {}
  ngOnInit(): void {}

  ajouterForm(tab) {
    tab.push({});
  }

  addHobby(input: any) {
    const foundObj = this.monCV.loisirs.find(
      (obj) => obj === input.target.value
    );
    if (foundObj) {
      input.target.value = '';
    } else {
      event.preventDefault(); // prevent the default form submission behavior
      if (this.monCV.loisirs.indexOf(input.target.value) == -1) {
        this.monCV.loisirs.push(input.target.value);
      }
      input.target.value = '';
    }
  }

  removeHobby(hash: string) {
    const index = this.monCV.loisirs.indexOf(hash);
    if (index !== -1) {
      this.monCV.loisirs.splice(index, 1);
    }
  }
  async addLiens(event: any, name: any) {
    let lien = new Liens();
    lien.nom = name;
    lien.url = await event;
    const indexToUpdate = this.monCV.liens.findIndex((obj) => obj.nom === name);
    if (indexToUpdate !== -1) {
      this.monCV.liens[indexToUpdate] = lien;
    } else {
      this.monCV.liens.push(lien);
    }
  }
  onFileSelected(event): void {
    const file = event.target.files[0]; // get the selected file
    const reader = new FileReader(); // create a new FileReader object
    reader.readAsDataURL(file); // read the file data as a base64-encoded string
    reader.onload = () => {
      // set the onload event handler
      this.imageUrl = reader.result as string; // set the imageUrl variable to the image data
      this.monCV.urlImage = reader.result as string;
    };
  }
}
