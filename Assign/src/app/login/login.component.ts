import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    "email": new FormControl("", Validators.compose([Validators.required,Validators.minLength(3)])),
    "password": new FormControl("", Validators.required),
    });

    email:any=localStorage.getItem('email');
    pass:any=localStorage.getItem('password');
    
    onSubmit() {
    console.log("reactive form submitted");
    console.log(this.form.value);
    if(this.form.value.email==this.email && this.form.value.password==this.pass){
      alert("Welcome to the Employee Portal");
      this.router.navigateByUrl("/home");

    }
    else if(this.form.value.email!=this.email && this.form.value.password==this.pass){
      alert('Enter a valid email');

    }
    else if(this.form.value.email==this.email && this.form.value.password!=this.pass){
      alert('Enter a valid Password');

    }
    else{
      alert('You are not a registered user! Kindly register');

      
    }
    }
    reset() {
    this.form.reset();
    }
  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
  }

}
