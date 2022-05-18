import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeecardComponent } from './employeecard/employeecard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  { 
    path:'login', 
    component:LoginComponent 
  }, 
  { 
    path:'', 
    component:LoginComponent 
  }, 

  { 
    path:'register', 
    component:RegisterComponent 
  }, 
  
  { 
    path:'home', 
    component:EmployeecardComponent },
  { 
    path:'repass', 
    component:ResetpasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
