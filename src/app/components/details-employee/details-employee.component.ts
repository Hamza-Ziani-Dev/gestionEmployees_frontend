import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {

  id : any;

  employees : any;

  constructor(
    private route:ActivatedRoute,
    private employeesService : EmployeesService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAllEmployees();
  }

  getAllEmployees(): void{
    this.employeesService.getEmployeeById(this.id).subscribe((res) => {
      this.employees = res
      console.log('====================================');
      console.log(this.employees);
      console.log('====================================');
    });
  }

}
