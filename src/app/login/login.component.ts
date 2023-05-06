import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  pswd: string;
  email: string;
  resetByEmail: string;
  cnxForm: FormGroup;
  isSubmitted = false;
  loggedInUser: any;
  idUser: any;
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  userData: { password: string; email: string };
  constructor() {
    this.initializeForm();
  }
  initializeForm() {
    this.cnxForm = new FormGroup({
      password: new FormControl(this.pswd, [Validators.required]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
    });
  }
  cnx() {
    this.userData = {
      password: this.pswd,
      email: this.email,
    };
    this.isSubmitted = true;

    if (this.cnxForm.invalid) {
      return false;
    } else {
      return true;
    }
  }
}
