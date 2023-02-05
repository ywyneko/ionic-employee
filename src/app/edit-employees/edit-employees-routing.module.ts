import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEmployeesPage } from './edit-employees.page';

const routes: Routes = [
  {
    path: '',
    component: EditEmployeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEmployeesPageRoutingModule {}
