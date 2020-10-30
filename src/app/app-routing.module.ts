import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddServiceComponent } from './add-service/add-service.component';
import { ErrorComponent } from './error/error.component';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'packages', component:PackagesComponent},
  {path:'service/:name', component:ServicesComponent},
  {path:'services/:id', component:AddServiceComponent},
  // {path:'services',component:AddServiceComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
