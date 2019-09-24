import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DonorListComponent} from "./component/donor-list/donor-list.component";
import {AddDonorComponent} from "./component/add-donor/add-donor.component";

const appRoutes: Routes = [
  { path: 'donor-list', component: DonorListComponent },
  { path: 'add-donor/:lat/:lng', component: AddDonorComponent },
  { path: '',
    redirectTo: '/donor-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
