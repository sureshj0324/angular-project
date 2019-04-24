import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserEmail:string;
  loginUserPwd:string;

  constructor() { }

  ngOnInit() {
  }

  getLoginData(form){
    this.loginUserEmail = form.controls.email.value;
    this.loginUserPwd = form.controls.password.value;
    if(form.controls.remember_me.value){
      this.storeLoginData(form.controls.email.value, form.controls.password.value);
    } else {
      this.removeLoginData();
    }
  }
  
  storeLoginData($email, $pwd){
    localStorage.setItem('emailId',$email);
    localStorage.setItem('password',$pwd);
  }

  removeLoginData(){
    localStorage.removeItem('emailId');
    localStorage.removeItem('password');
  }

}
