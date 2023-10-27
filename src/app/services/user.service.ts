import { Injectable, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { USERS } from '../data/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    const users=JSON.parse(sessionStorage.getItem("users") ?? "[]")
    if(users.length){
      this.users=users
    }else{
      this.users=USERS
      sessionStorage.setItem("users",JSON.stringify(USERS))
    }
   }

  users:User[]


  updateUser=(user:User)=>{
    const userIndex=this.users.findIndex(u=>u.email===user.email)
    this.users[userIndex]=user
    sessionStorage.setItem("users",JSON.stringify(this.users))
  }
}
