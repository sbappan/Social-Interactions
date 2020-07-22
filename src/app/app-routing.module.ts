import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupComponent } from './group/group.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import { SignUpComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {ProfileComponent } from './profile/profile.component'
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'group', component: GroupComponent}, 
  { path: 'creategroup', component: CreateGroupComponent},
  { path: 'user', component: UserComponent},
  { path: 'events' , component: EventComponent},

 
=======


const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'SignUp', component: SignUpComponent},
  { path: 'ResetPassword', component: ResetpasswordComponent},
  { path: 'Group', component: GroupComponent }
  { path: 'CreateGroup', component: CreateGroupComponent }

>>>>>>> ca86f487b2b3a8e5c3f9c103958476488e22146d
];

@NgModule({

  imports: 
  [RouterModule.forRoot(routes),
  CommonModule,
  BrowserModule,
  FormsModule , 
  ReactiveFormsModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
