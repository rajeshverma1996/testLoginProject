import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Key_Name } from '../constrant/constrant';
import { User } from '../model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm:FormGroup;
  model=new User();
  @Output() onSubmitForm = new EventEmitter<User>()
  constructor(
    private fb: FormBuilder,
    private route:Router
  ) { }
  buildForm(){
    this.myForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    
    });
  }
  ngOnInit(): void {
    this.buildForm();
  }
  onSubmit(form: FormGroup) {
   // debugger
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);
    console.log('Password', form.value.password);
    console.log(this.model);
    this.onSubmitForm.emit(this.model)
   


  //  if()
  
  }
}
