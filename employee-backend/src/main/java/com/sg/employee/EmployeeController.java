package com.sg.employee;

import com.sg.employee.model.Employee;
import com.sg.employee.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	// Select, Insert, Delete, Update Operations for an Employee

	@GetMapping("/employee/{id}")
	public Employee getEmployee(@PathVariable Long id) {
		Optional<Employee> employee = employeeService.findById(id);
		return employee.isPresent() ? employee.get() : null;
	}

	@PostMapping("/employee")
	public String addEmployee(@RequestBody Employee employee) {
		employeeService.save(employee);
		return "Added employee successfully";
	}

	@PutMapping("/employee")
	public Employee updateEmployee(@RequestBody Employee employee) {
		return employeeService.save(employee);
	}

	@DeleteMapping("/employee")
	public Map<String, String> deleteEmployee(@RequestParam Long id) {
		Map<String, String> status = new HashMap<>();
		Optional<Employee> employee = employeeService.findById(id);
		if (employee.isPresent()) {
			employeeService.delete(employee.get());
			status.put("Status", "Employee deleted successfully");
		} else {
			status.put("Status", "Employee not exist");
		}
		return status;
	}

	// Select, Insert, Delete for List of Employees

	@GetMapping("/employees")
    public List<Employee> getAllEmployee(){
    	List<Employee> list = employeeService.findAll();
    	Collections.sort(list);
        return list;
    }

	@PostMapping("/employees")
	public String addAllEmployees(@RequestBody List<Employee> employeeList) {
		employeeService.saveAll(employeeList);
		return "Added all employees successfully";
	}

	@DeleteMapping("/employees")
	public String addAllEmployees() {
		employeeService.deleteAll();
		return "Deleted all employees successfully";
	}
}
