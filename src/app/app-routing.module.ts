import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
  },
  {
    path: 'create-employee',
    loadChildren: () => import('./create-employees/create-employees.module').then( m => m.CreateEmployeesPageModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () => import('./edit-employees/edit-employees.module').then( m => m.EditEmployeesPageModule)
  },
  {
    path: 'employee-detail',
    loadChildren: () => import('./employee-detail/employee-detail.module').then( m => m.EmployeeDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
