import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

const getEmployees = () => {
   return axios.get(EMPLOYEE_API_BASE_URL);
}

const createEmployee = (employee) => {
   return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

const getEmployeeById = (id) => {
   return axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`)
}

const updateEmployeeApi = (id, employee) => {
   return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
}

const deleteEmployeeApi = (id) => {
   return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
}

export { getEmployees, createEmployee, getEmployeeById, updateEmployeeApi, deleteEmployeeApi };