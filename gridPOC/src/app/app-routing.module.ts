import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GridpocComponent } from './gridpoc/gridpoc.component';
import { GridpoclistComponent } from './gridpoclist/gridpoclist.component';
import { HomeComponent } from './home/home.component';
import { PocComponent } from './poc/poc.component';

// const routes: Routes = [];

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'poc',
    component: PocComponent,
    children: [      
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },  
      { path: 'gridpoc', component: GridpocComponent },
      { path: 'gridpoclist', component: GridpoclistComponent }       
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
