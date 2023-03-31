import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './components/Guards/login.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'home', pathMatch : 'full'
  },
  {
    path : 'home', component : HomeComponent
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'patient', canActivate : [LoginGuard] ,component : PatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
