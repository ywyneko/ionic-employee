import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEmployeesPageRoutingModule } from './edit-employees-routing.module';

import { EditEmployeesPage } from './edit-employees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEmployeesPageRoutingModule
  ],
  declarations: [EditEmployeesPage]
})
export class EditEmployeesPageModule {}
