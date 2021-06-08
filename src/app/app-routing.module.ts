import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'user',
        pathMatch: 'full',
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
