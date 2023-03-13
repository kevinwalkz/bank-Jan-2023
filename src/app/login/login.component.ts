import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //login form
  loginForm = this.fb.group({
    acno:['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.get('acno')?.errors)
    if(this.loginForm.valid){
      let acno = this.loginForm.value.acno
      let pswd = this.loginForm.value.pswd
      console.log(acno,pswd);
    }
    else{
      alert('Invalid Form')
    }
  }

}
