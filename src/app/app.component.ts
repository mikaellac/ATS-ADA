import { User } from 'src/models/user';
import { LoginService } from './services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cv-listings';

  constructor(private loginService: LoginService) {}

  loggedUser = (): User | undefined => {
    return this.loginService.loggedUser;
  };
}
