import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './header/add-resto/add-resto.component';
import { UpdateRestoComponent } from './header/update-resto/update-resto.component';
import { ListRestoComponent } from './header/list-resto/list-resto.component';
import { RegisterRestoComponent } from './header/register-resto/register-resto.component';

const routes: Routes = [
  {
    component: AddRestoComponent,
    path: 'add'
  },
  {
    component: ListRestoComponent,
    path: 'list'
  },
  {
    component: RegisterRestoComponent,
    path: 'register'
  },
  {
    component: UpdateRestoComponent,
    path: 'update'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
