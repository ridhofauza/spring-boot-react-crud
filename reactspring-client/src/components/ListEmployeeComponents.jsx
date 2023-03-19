import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from '../services/EmployeeService';
import { deleteEmployeeApi } from '../services/EmployeeService';

const ListEmployeeComponent = (props) => {
   const [employees, setEmployees] = useState([]);
   useEffect(() => {
      getEmployees().then((res) => {
         setEmployees(res.data);
      })
   },[]);
   const navigate = useNavigate();

   const addEmployee = () => {
      navigate('/add-employee');
   }

   const editEmployee = (employeeId) => {
      navigate(`/update-employee/${employeeId}`);
   }

   const deleteEmployee = (employeeName, employeeId) => {
      const isDelete = window.confirm(`Apakah Anda ingin menghapus data ${employeeName} ?`);
      if(isDelete) {
         deleteEmployeeApi(employeeId).then((result) => {
            setEmployees(employees.filter(employee => employee.id !== employeeId));
            console.log("wokee");
         });
      }
   }

   const viewEmployee = (employeeId) => {
      navigate(`/view-employee/${employeeId}`);
   }

   return(
      <div>
         <h2 className="text-center">Employees List</h2>
         <div className="row my-3">
            <button className="btn btn-primary" onClick={() => addEmployee()}>Add Employee</button>
         </div>
         <div className="row">
            <table className="table table-striped table-bordered">
               <thead>
                  <tr>
                     <th>Employee First Name</th>
                     <th>Employee Last Name</th>
                     <th>Employee Email Id</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     employees.map(
                        employee => 
                        <tr key = {employee.id}>
                           <td>{ employee.firstName }</td>
                           <td>{ employee.lastName }</td>
                           <td>{ employee.emailId }</td>
                           <td>
                              <button onClick={ () => editEmployee(employee.id)} className="btn btn-info">Update</button>
                              <button onClick={ () => deleteEmployee(employee.firstName, employee.id)} className="btn btn-danger" style={{ marginLeft: "10px" }}>Delete</button>
                              <button onClick={ () => viewEmployee(employee.id)} className="btn btn-primary" style={{ marginLeft: "10px" }}>View</button>
                           </td>
                        </tr>
                     )
                  }
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default ListEmployeeComponent;