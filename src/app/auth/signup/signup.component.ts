import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './../auth.service';
import { _localeFactory } from '@angular/core/src/application_module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSignUp( form : NgForm){

const email = form.value.email ;
const password = form.value.password ;
this.authService.signUpUser(email, password);
// let ValidationForm = this.authService.signUpUser(email, password);


form.reset();
// console.log(form);
  }

}
