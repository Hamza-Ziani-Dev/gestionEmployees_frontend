import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
   employees : Employee = new Employee(); 

  constructor(
    private router : Router,
    private employeesService : EmployeesService) { }

  ngOnInit(): void {
   
  }


  GoToListEmployees(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    this.employeesService.createEmployee(this.employees).subscribe((res) => {
      console.log(res);
      this.GoToListEmployees();
    });
  }

}
