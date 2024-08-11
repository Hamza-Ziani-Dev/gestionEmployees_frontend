import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './components/details-employee/details-employee.component';

const routes: Routes = [
  {
    path: 'employees',component: ListEmployeesComponent
  },
  {
    path: 'create-employee', component: CreateEmployeeComponent
  },
  {
    path: 'update-employee/:id', component: UpdateEmployeeComponent
  },
  {
    path:'details-employee/:id', component: DetailsEmployeeComponent
  },
  {
    path: '', redirectTo: 'employees', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
