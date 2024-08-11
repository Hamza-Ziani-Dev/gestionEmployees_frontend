import { EmployeesService } from './../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id : any;
  employees : Employee = {} as Employee;

  constructor(
    private route:ActivatedRoute,
    private employeesService : EmployeesService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getEmployeeById();
  }

  // Get Employees By Id :
  getEmployeeById() : void{
    this.employeesService.getEmployeeById(this.id).subscribe((res) => {
      this.employees = res
    });
  }

  // Update Employee :
  updateEmployee() : void{
    this.employeesService.updateEmployee(this.id, this.employees).subscribe((res) => {
      this.employees = res
      this.router.navigate(['/employees']);
    });
  }

}
