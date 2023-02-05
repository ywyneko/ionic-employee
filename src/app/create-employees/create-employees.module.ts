import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEmployeesPageRoutingModule } from './create-employees-routing.module';

import { CreateEmployeesPage } from './create-employees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateEmployeesPageRoutingModule
  ],
  declarations: [CreateEmployeesPage]
})
export class CreateEmployeesPageModule {}
