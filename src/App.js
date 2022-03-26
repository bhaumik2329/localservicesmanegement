import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SelectDemo } from "./components/SelectDemo"
import { Home } from "./components/Home"
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';

import { Service } from './components/Service';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { ForgotPass } from './components/ForgotPass';
import { UpdatePass } from './components/UpdatePass';


//admin import 

import AdminNavbar from "./admincomponents/AdminNavbar"
import { UserRegistration } from "./admincomponents/UserRegistration";
import { RoleAPI } from "./api/RoleAPI";
import { GetRole } from "./api/GetRole"
import { DeleteRole } from "./api/DeleteRole";
import { UpdateRole } from './api/UpdateRole'
import { AdminDashboard } from './admincomponents/AdminDashboard';
import { Logout } from './components/Logout';



function App() {
  return (
    <div >

      {/* <SelectDemo /> */}

      {/* <SignUp />
      <Login /> */}
      {/* <Service /> */}
      {/* <About /> */}
      {/* <Profile /> */}









      {/* admmin */}

      {/* < GetRole /> */}

      {/* <RoleAPI /> */}
      {/* <UserRegistration /> */}
      {/* <AdminNavbar /> */}
      {/* <AdminDashboard /> */}





      <Routes>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/Signup" element={<SignUp />}></Route>
      </Routes>
      <Routes>
        <Route path="/ForgotPass" element={<ForgotPass />}></Route>
      </Routes>
      <Routes>
        <Route path="/UpdatePass/:id" element={<UpdatePass />}></Route>
      </Routes>
      <Routes>
        <Route path="/Logout" element={<Logout />}></Route>
      </Routes>



      {/* admin roots */}
      <Routes>
        <Route path="/update/:id" element={<UpdateRole />}></Route>
      </Routes>
      <Routes>
        <Route path="/admin/Dashboard" element={<AdminDashboard />}></Route>
      </Routes>
      <Routes>
        <Route path="/GetRole" element={<GetRole />}></Route>
      </Routes>
    </div>
  );
}

export default App;
