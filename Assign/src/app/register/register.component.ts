import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any={
    firstName:'',
    password:'',
    contact:'',
    email:''
    };
    onSubmitTemplateBased(user:any) {
    console.log(user);
    localStorage.setItem("firstName",user.firstName);
    localStorage.setItem("password",user.password);
    localStorage.setItem("contact",user.contact);
    localStorage.setItem("email",user.email);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
