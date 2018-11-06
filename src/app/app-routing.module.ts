import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-crud/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-crud/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-crud/employee-edit/employee-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee-list',
    pathMatch: 'full'
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
  {
    path: 'employee-create',
    component: EmployeeCreateComponent,
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
