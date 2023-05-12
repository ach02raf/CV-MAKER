import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  allUsers: User[] = [];
  constructor() {}

  addUser(user: User) {
    this.allUsers.push(user);
    console.log('user from user', this.allUsers);
  }

  getUser(email: string, password: string) {
    console.log('email wezza', this.allUsers);

    for (let user of this.allUsers) {
      console.log('ekhdem', user);
      console.log('ekhdem1', email);
      console.log('ekhdem1', password);

      if (user.email === email && user.password === password) {
        return user;
      }
    }
    return null;
  }

  logout() {
    localStorage.removeItem('user');
  }

  isLogging() {
    let user = localStorage.getItem('user');
    if (user) return true;
    return false;
  }
}
