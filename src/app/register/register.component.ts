import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Key_Name } from '../constrant/constrant';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(model:User){
    if(model.Email && model.Password){
      localStorage.setItem(Key_Name.CurrentUser,JSON.stringify(model))      
      this.route.navigateByUrl("/login");
    }
  }
}
