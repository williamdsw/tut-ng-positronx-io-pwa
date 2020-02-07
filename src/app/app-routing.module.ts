import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUsersComponent } from './list-users/list-users.component';

const ROUTES: Routes = [
  { path: 'list-users', component: ListUsersComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list-users' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
