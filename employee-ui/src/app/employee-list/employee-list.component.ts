import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModel } from './../_models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  employees: EmployeeModel[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }

}
