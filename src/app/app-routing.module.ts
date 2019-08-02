import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApartmentsComponent} from './apartments/apartments.component';
import {ApplicationComponent} from './application/application.component';
import {ContactComponent} from './contact/contact.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {PaymentComponent} from './payment/payment.component';
import {AboutComponent} from './about/about.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: ApartmentsComponent},
  {path: 'application', component: ApplicationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
