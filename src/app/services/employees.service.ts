import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from '../models/employees.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

   apiUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) {}

  getEmployees() : Observable<Employees[]>{
    return this.http.get<Employees[]>(`${this.apiUrl}/employees`);
  }

  createEmployee(employee : Employees){
    return this.http.post(`${this.apiUrl}/employees`,employee);
  }

  getEmployee(employeeId : number){
   return this.http.get(`${this.apiUrl}/employees/${employeeId}`);
  }


  updateEmployee(employeeId : number,employee : Employees){
    return this.http.put<Employees>(`${this.apiUrl}/employees/${employeeId}`,employee);
  }
}
