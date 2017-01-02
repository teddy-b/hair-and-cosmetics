import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

const USERS: UserModel[] = [];
const USER: UserModel = {email: '', password: ''};

@Injectable()
export class UserService {
  currentUser: UserModel = USER;
  loggedUser: string = '';
  users: UserModel[] = USERS;

  constructor() { }

  getLoggedUser(): string {
    this.loggedUser = localStorage.getItem('h-and-c-user');
    return this.loggedUser;
  }

  getUser(): UserModel {
    return this.currentUser;
  }

  login(user: UserModel): UserModel {
    if (this.users.filter(u => u.email == user.email && u.password == user.password).length) {
      localStorage.setItem('h-and-c-user', JSON.stringify(user.email));
      return user;
    }
  }

  register(user: UserModel): UserModel {
    if (!this.users.filter(u => u.email == user.email).length) {
      this.users.push(user);
      this.currentUser.email = user.email;
      this.currentUser.password = user.password;
      return user;
    }
  }

  logout(): void {
    localStorage.removeItem('h-and-c-user');
  }
}
