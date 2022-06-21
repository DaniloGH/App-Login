import { NewPasswordComponent } from './views/components/new-password/new-password.component';
import { RecoverComponent } from './views/components/recover/recover.component';
import { SignupComponent } from './views/components/signup/signup.component';
import { LoginComponent } from './views/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';

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
    path: 'recover', 
    component: RecoverComponent
  },
  { 
    path: 'new-password', 
    component: NewPasswordComponent
  },
  { 
    path: 'home', 
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
