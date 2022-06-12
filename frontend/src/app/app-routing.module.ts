import { ForgotPasswordComponent } from './views/components/forgot-password/forgot-password.component';
import { SignupComponent } from './views/components/signup/signup.component';
import { LoginComponent } from './views/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path: 'signup', 
    component: SignupComponent
  },
  { 
    path: 'forgot-password', 
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
