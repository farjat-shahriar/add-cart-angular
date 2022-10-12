import { Component, OnInit } from '@angular/core';
import { Registerform } from 'src/app/type/reg';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 form: Registerform = {
  email:'',
  password:'',
  confirm_password:'',
  }
  submit(){
    alert(this.form)
  }
}
