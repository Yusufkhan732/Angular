import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist.component';

const routes: Routes = [


  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },

  {
    path: 'welcome',
    component: WelcomeComponent
  },

  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'User',
    component: UserComponent
  },
  {
    path: 'User/:id',
    component: UserComponent
  },

  {
    path: 'userList',
    component: UserlistComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
