import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit1',
  templateUrl: './edit1.component.html',
  styleUrls: ['./edit1.component.scss'],
})
export class Edit1Component implements OnInit {
  isCollapsed = true;
  isCollapsedcordonnee = true;
  isCollapsedliens = true;
  isCollapsedhobby = true;

  name: string;
  prenom: string;
  email: string;
  phone: string;
  adresse: string;
  aboutMe: string;
  nationalite: string;
  etatCivil: string;
  dateNaissance: Date;

  nameError: string;
  prenomError: string;
  emailError: string;
  phoneError: string;
  adresseError: string;
  nationaliteError: string;
  etatCivilError: string;
  dateNaissanceError: string;
  imageUrl: string = '../../../assets/image_placeholder.jpg';

  tabbleauHobby = [];
  Hobby: any[] = [];
  inputValueHobby: string;

  ngOnInit(): void {}

  ajouterForm(tab) {
    tab.push({});
  }

  addHobby(inpu: any) {
    event.preventDefault(); // prevent the default form submission behavior
    console.log('value', inpu);

    console.log('index', this.tabbleauHobby.indexOf(inpu));

    if (this.tabbleauHobby.indexOf(inpu) == -1) {
      this.tabbleauHobby.push(inpu);
    }
    inpu = '';
    console.log(this.tabbleauHobby);
  }

  removeHobby(hash: string) {
    const index = this.tabbleauHobby.indexOf(hash);
    console.log('innnddd', index);

    if (index !== -1) {
      this.tabbleauHobby.splice(index, 1);
    }
  }

  onFileSelected(event): void {
    const file = event.target.files[0]; // get the selected file
    const reader = new FileReader(); // create a new FileReader object
    reader.readAsDataURL(file); // read the file data as a base64-encoded string
    reader.onload = () => {
      // set the onload event handler
      this.imageUrl = reader.result as string; // set the imageUrl variable to the image data
      console.log(this.imageUrl);
    };
  }
}
