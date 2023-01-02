import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path:'',
    component: UserDetailsComponent
  },
  {
    path:'view-user/:id',
    component: ViewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
