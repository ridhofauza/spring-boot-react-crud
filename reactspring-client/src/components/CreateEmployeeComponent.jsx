import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEmployee } from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
   const [getFirstName, setFirstName] = useState('');
   const [getLastName, setLastName] = useState('');
   const [getEmailId, setEmailId] = useState('');
   const changeFirstNameHandler = ({ value }) => {
      setFirstName(value);
   }
   const changeLastNameHandler = ({ value }) => {
      setLastName(value);
   }
   const changeEmailIdHandler = ({ value }) => {
      setEmailId(value);
   }
   const saveEmployee = (event) => {
      event.preventDefault();
      let employee = {
         firstName: getFirstName,
         lastName: getLastName,
         emailId: getEmailId
      }
      console.log(JSON.stringify(employee));
      createEmployee(employee).then((res) => {
         navigate('/employees');
      });
      
   }
   const navigate = useNavigate();
   const cancel = () => {
      navigate('/employees');
   }

   return(
      <div>
         <div className="container p-3">
            <div className="row">
               <div className="card col-md-6 offset-md-3 offset-md-3">
                  <h3 className="text-center">Add Employee</h3>
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
                           <input type="email" placeholder="Email Address" name="emailId" className="form-control" value={getEmailId} onChange={(e) => changeEmailIdHandler(e.target)} />
                        </div>

                        <button className="btn btn-success" onClick={(e) => saveEmployee(e)}>Save</button>
                        <button className="btn btn-danger" onClick={() => cancel()} style={{ marginLeft: "10px" }}>Cancel</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CreateEmployeeComponent;