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

  userData: { password: string; email: string };
  constructor() {
    this.initializeForm();
  }
  initializeForm() {
    this.cnxForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
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
