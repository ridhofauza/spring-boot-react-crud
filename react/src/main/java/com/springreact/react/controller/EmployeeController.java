package com.springreact.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springreact.react.exception.ResourceNotFoundException;
import com.springreact.react.model.Employee;
import com.springreact.react.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Employee not exist with id : " + id));
		return ResponseEntity.ok(employee);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long id, @RequestBody Employee newEmployee) {
		Employee employee = employeeRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Employee not exist with id : " + id)
		);
		employee.setFirstName(newEmployee.getFirstName());
		employee.setLastName(newEmployee.getLastName());
		employee.setEmailId(newEmployee.getEmailId());
		
		Employee result = employeeRepository.save(employee);
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("/employees/{id}")
	public Employee deleteEmployee(@PathVariable("id") Long id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Employee not exist with id : " + id)
		);
		employeeRepository.delete(employee);
		return employee;
	}
	
}
