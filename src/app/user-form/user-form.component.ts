import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Component, Input } from '@angular/core';
import { Address } from 'src/models/address';
import Curriculum from 'src/models/curriculum';
import { User } from 'src/models/user';
import { LoginService } from '../services/login.service';
import { Location } from '@angular/common';
import { Proficiency } from 'src/models/proficiency';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private location: Location,

  ) {}

  user: User =
    this.loginService.loggedUser ??
    new User(
      '',
      '',
      '',
      '',
      0,
      '',
      new Address('', '', '', '', '', ''),
      new Curriculum('', [])
    );

  onSubmit = () => {
    this.userService.updateUser(this.user);
    this.location.back();
  };

  addSkill = () => {
    this.user.curriculum.skills.push({
      name: '',
      proficiency: Proficiency.VERY_LOW,
    });
  };

  removeSkill=(name:string)=>{
    const index=this.user.curriculum.skills.findIndex(skill=>skill.name===name)
    this.user.curriculum.skills.splice(index,1)
  }
}
