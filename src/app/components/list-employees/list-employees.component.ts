import { EmployeesService } from './../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees : Employee[] = [];
  constructor(
    private router : Router,
    private employeesService : EmployeesService) { }

  ngOnInit(): void {
   this.getAllEmployees();

  }


  // get All Employees :
  getAllEmployees() : void{
    this.employeesService.getAllEmployees().subscribe((res) => {
      this.employees = res
    });
  }

  // Update Employee :
  updateEmployee(id : number) : void{
    this.router.navigate(['/update-employee', id]);
   }


  //  delete Employee:
  deleteEmployee(id : number) : void{
    this.employeesService.deleteEmployee(id).subscribe((res) => {
      this.getAllEmployees();
    });
  }





}
