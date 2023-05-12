import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  public inscriptionForm: FormGroup;
  password: String;
  email: String;
  nom: String;
  prenom: String;
  isSubmitted = false;

  constructor(private userServ: UserService, private route: Router) {}

  ngOnInit(): void {
    this.initializeform();
  }

  initializeform() {
    this.inscriptionForm = new FormGroup({
      password: new FormControl(this.password, [Validators.required]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
      nom: new FormControl(this.nom, [Validators.required]),
      prenom: new FormControl(this.prenom, [Validators.required]),
    });
  }

  signup() {
    this.isSubmitted = true;

    if (this.inscriptionForm.valid) {
      let user = this.inscriptionForm.value;
      user._id = this.userServ.allUsers.length + 1;
      localStorage.setItem('user', user);
      this.userServ.addUser(user);
      console.log('User:', user);
      this.route.navigateByUrl('/');

      // Clear the form after successful registration
      this.inscriptionForm.reset();
    }
  }
}
