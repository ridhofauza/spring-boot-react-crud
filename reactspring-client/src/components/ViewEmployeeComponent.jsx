import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getEmployeeById } from '../services/EmployeeService';

const ViewEmployeeComponent = () => {
   const [getEmployee, setEmployee] = useState('');
   const params = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      getEmployeeById(params.id).then(({ data }) => {
         setEmployee(data);
         console.log(data);
      });
   },[]);

   const backToHome = () => {
      navigate('/employees');
   }

   return(
      <div className="p-3">
         <div className="card col-md-6 offset-md-3">
            <h3 className="text-center" > View Employee Details </h3>
            <div className="card-body">
               <div className="row">
                  <label>Employee First Name: </label>
                  <div>&nbsp;{ getEmployee.firstName }</div>
               </div>
               <div className="row">
                  <label>Employee Last Name: </label>
                  <div>&nbsp;{ getEmployee.lastName }</div>
               </div>
               <div className="row">
                  <label>Employee Email Address: </label>
                  <div>&nbsp;{ getEmployee.emailId }</div>
               </div>
               <div className="row">
                  <button className="btn btn-info ml-auto px-3" onClick={() => backToHome()}>Back</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ViewEmployeeComponent;