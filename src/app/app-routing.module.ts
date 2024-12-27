import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { SignupComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignUpComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  {
    path: 'Login',
    component: LoginComponent,
    //   children: [{ path: 'dashboard', component: DashboardComponent }],
  },
  { path: 'layouts', component: LayoutsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
