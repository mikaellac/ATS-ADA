import { UserService } from './user.service';
import { Injectable } from '@angular/core';

import Credentials from '../../models/credentials';

import { User } from '../../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private userService: UserService, private router: Router) {}

  isLoggedIn: boolean = false;
  showLogin: boolean = false;
  loggedUser?: User;

  login(credentials: Credentials): boolean {
    const user = this.userService.users.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );
    this.isLoggedIn = user ? true : false;
    this.setLoginForm(!this.isLoggedIn);
    this.loggedUser = user;
    return this.isLoggedIn;
  }

  setLoginForm(showLoginForm: boolean) {
    this.showLogin = showLoginForm;
  }

  toggle() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  logout = () => {
    this.isLoggedIn = false;
    this.loggedUser = undefined;
    this.router.navigate(['']);
  };
}
