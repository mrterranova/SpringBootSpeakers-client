import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ApplicationComponent } from './components/application/application.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { AllEventsComponent } from './components/all-events/all-events.component';

const routes: Routes = [
  {
    path: '', 
    component: HomepageComponent
  }, 
  {
    path: 'apply',
    component: ApplicationComponent
  },
  {
    path: 'speaker/events/:id', 
    component: ViewRegistrationComponent
  }, 
  {
    path: 'speaker/events', 
    component: AllEventsComponent
  }, 
  {
    path: 'admin', 
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
