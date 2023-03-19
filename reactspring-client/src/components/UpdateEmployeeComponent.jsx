import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById, updateEmployeeApi } from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {
   const [getFirstName, setFirstName] = useState('');
   const [getLastName, setLastName] = useState('');
   const [getEmailId, setEmailId] = useState('');
   const [getEmployeeId, setEmployeeId] = useState('');

   const changeFirstNameHandler = ({ value }) => {
      setFirstName(value);
      console.log(value);
   }
   const changeLastNameHandler = ({ value }) => {
      setLastName(value);
      console.log(value);
   }
   const changeEmailIdHandler = ({ value }) => {
      setEmailId(value);
      console.log(value);
   }

   const navigate = useNavigate();
   const params = useParams();
   useEffect(() => {
      console.log(params.id);
      getEmployeeById(params.id).then(({ data }) => {
         setEmployeeId(data.id);
         setFirstName(data.firstName);
         setLastName(data.lastName);
         setEmailId(data.emailId);
         console.log(data);
      });
   }, []);
   const updateEmployee = (e) => {
      e.preventDefault();
      let employee = {
         id: getEmployeeId,
         firstName: getFirstName,
         lastName: getLastName,
         emailId: getEmailId
      };
      updateEmployeeApi(employee.id, employee).then((result) => {
         navigate('/employees');
      });
   }
   const cancel = () => {
      navigate('/employees');
   }

   return(
      <div className="container p-3">
         <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
               <h3 className="text-center">Update Employee</h3>
               <div className="card-body">
                  <form>
                     <div className="form-group">
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" name="firstName" className="form-control" value={getFirstName} onChange={(e) => changeFirstNameHandler(e.target)} />
                     </div>
                     <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" name="lastName" className="form-control" value={getLastName} onChange={(e) => changeLastNameHandler(e.target)} />
                     </div>
                     <div className="form-group">
                        <label>Email Address</label>
                        <input type="text" placeholder="Email Address" name="emailId" className="form-control" value={getEmailId} onChange={(e) => changeEmailIdHandler(e.target)} />
                     </div>

                     <button className="btn btn-success" onClick={(e) => updateEmployee(e)}>Save</button>
                     <button className="btn btn-danger" onClick={() => cancel()} style={{ marginLeft: "10px" }}>Cancel</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default UpdateEmployeeComponent;