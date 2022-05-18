import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  form = new FormGroup({
    "email": new FormControl("", Validators.compose([Validators.required,Validators.email])),
    "password": new FormControl("", Validators.required),
    "repassword":new FormControl("",Validators.required),
    });

    email1:any=localStorage.getItem('email');
    pass:any=localStorage.getItem('password');

    
    
    
    onSubmit() {
    console.log("reactive form submitted");
    console.log(this.form.value);
    if(this.form.value.email!=this.email1 ){
      alert("User do not exist,Kindly register");
      this.router.navigateByUrl("/register");
      

    }
    else if(this.form.value.password==this.form.value.repassword){
      
      localStorage.setItem('password',this.form.value.repassword);
      alert('Password changed successfully');
      

    }
    else{
      alert('Password and Confirm-Passsword are not same');

      
    }
    }
    reset() {
    this.form.reset();
    }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
