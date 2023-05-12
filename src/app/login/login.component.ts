import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

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
  constructor(private userServ: UserService) {
    this.initializeForm();
  }
  initializeForm() {
    this.cnxForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  cnx() {
    this.isSubmitted = true;
    const credentials = this.cnxForm.value;
    console.log(this.cnxForm.value);

    if (this.cnxForm.invalid) {
      return false;
    } else {
      const user = this.userServ.getUser(
        credentials.email,
        credentials.password
      );
      localStorage.setItem('user', JSON.stringify(user));

      return true;
    }
  }
}
