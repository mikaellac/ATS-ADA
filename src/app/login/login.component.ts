import { LoginService } from '../services/login.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import Credentials from '../../models/credentials';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  @Input() credentials:Credentials=new Credentials("","")
  @Output() loginResultEvent=new EventEmitter<string>()

  constructor(
    private loginService:LoginService,

  ){

  }

  onSubmit(){
    if(!this.loginService.login(this.credentials)){
      this.loginResultEvent.emit("Invalid credentials")
    }
  }

  close=()=>{
    this.loginService.setLoginForm(false)
  }
}


