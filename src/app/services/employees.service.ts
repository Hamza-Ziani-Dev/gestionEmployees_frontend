import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }


  // get All Employees :
  getAllEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  // create Employee :
  createEmployee(employee : Employee) : Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }


  // Get Employee By Id :
  getEmployeeById(id : number) : Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }


  // Update Employee :
  updateEmployee(id : number, employee : Employee) : Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  // delete Employee :
  deleteEmployee(id : number) : Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/${id}`);
  }
}
