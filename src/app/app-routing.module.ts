import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsListComponent } from './reports/reports-list/reports-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'reports', pathMatch: 'full' },
  { path: 'reports', component: ReportsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
