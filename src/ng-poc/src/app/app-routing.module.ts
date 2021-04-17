import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TabulatedListComponent } from './tabulated-list/tabulated-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'nav', component: NavComponent },
  { path: 'grid', component: TabulatedListComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
