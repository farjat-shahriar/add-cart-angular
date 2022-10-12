import { Component, OnInit } from '@angular/core';
import { Loginform } from 'src/app/type/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: Loginform = {
    email:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    alert(this.form)
  }
}
