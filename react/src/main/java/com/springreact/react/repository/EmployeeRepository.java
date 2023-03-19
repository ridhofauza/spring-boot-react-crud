package com.springreact.react.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springreact.react.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
