import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import {HttpClientModule} from "@angular/common/http";
import { EmployeesService } from './services/employees.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { FooterComponent } from './includes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './components/details-employee/details-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    NavbarComponent,
    FooterComponent,
    UpdateEmployeeComponent,
    DetailsEmployeeComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
   


  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
