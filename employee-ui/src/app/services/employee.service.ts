import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../_models/employee.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get<EmployeeModel[]>(environment.BASE_URL + 'employees');
  }

  addEmployee(employee: EmployeeModel) {
    return this.http.post(environment.BASE_URL + 'employee', employee, { responseType: 'text' });
  }

  deleteEmployee(id: string) {
    return this.http.delete(environment.BASE_URL + 'employee' + '/' + id);
  }

  updateEmployee(employee: EmployeeModel) {
    return this.http.put(environment.BASE_URL + 'employee', employee);
  }

  getEmployeeById(id: string) {
    return this.http.get(environment.BASE_URL + 'employee' + '/' + id);
  }
}
