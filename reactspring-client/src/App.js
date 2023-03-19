import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<ListEmployeeComponent />} ></Route>
              <Route path="/employees" element={<ListEmployeeComponent />} ></Route>
              <Route path="/add-employee" element={<CreateEmployeeComponent />} ></Route>
              <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} ></Route>
              <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} ></Route>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
