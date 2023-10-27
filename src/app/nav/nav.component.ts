import { User } from '../../models/user';
import { LoginService } from '../services/login.service';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  constructor(private loginService: LoginService) {}

  loggedUser(): User | undefined {
    return this.loginService.loggedUser;
  }

  isLoggedIn = (): boolean => {
    return this.loginService.isLoggedIn;
  };

  showLoginResult=(loginResult:string)=>{
    alert(loginResult)
  }

  showLoginForm = (): boolean => {
    return this.loginService.showLogin;
  };

  login = () => {
    this.loginService.setLoginForm(true);
  };

  logout=()=>{
    this.loginService.logout()
  }
}
