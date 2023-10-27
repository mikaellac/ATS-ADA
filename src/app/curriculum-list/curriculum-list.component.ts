import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-curriculum-list',
  templateUrl: './curriculum-list.component.html',
  styleUrls: ['./curriculum-list.component.css']
})
export class CurriculumListComponent {

  constructor(
    private router:Router,
    private loginService:LoginService,
  ){

  }

  user():User|undefined{
    return this.loginService.loggedUser
  }

  edit(){
    this.router.navigate(["/edit"])
  }
}
