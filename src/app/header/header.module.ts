import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { RegisterRestoComponent } from './register-resto/register-resto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddRestoComponent,
    UpdateRestoComponent,
    ListRestoComponent,
    RegisterRestoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AddRestoComponent,
    UpdateRestoComponent,
    ListRestoComponent,
    RegisterRestoComponent,
  ]
})
export class HeaderModule { }
