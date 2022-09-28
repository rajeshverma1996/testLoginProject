import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Key_Name } from '../constrant/constrant';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
    if(!localStorage.getItem(Key_Name.CurrentUser))
    this.route.navigateByUrl("/register")

  }
  onSubmit(event:User){
    console.log(event)
  }
}
