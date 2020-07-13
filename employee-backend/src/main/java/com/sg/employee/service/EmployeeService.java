package com.sg.employee.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sg.employee.model.Employee;

public interface EmployeeService extends JpaRepository<Employee, Long>{
}
