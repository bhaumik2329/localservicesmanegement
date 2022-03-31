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

import { UserRegistration } from "./admincomponents/UserRegistration";
import { GetRole } from "./api/GetRole"
import { GetUser } from './api/GetUser';
import { UpdateRole } from './api/UpdateRole'
import { AdminDashboard } from './admincomponents/AdminDashboard';
import { Logout } from './components/Logout';
import { UpdateUser } from './api/UpdateUser';
import { GetService } from './api/GetService';
import { UpdateService } from './api/UpdateService';
import { GetCatagory } from './api/GetCatagory';
import { GetViceCatagory } from './api/GetViceCatagory';
import { UpdateCatagory } from './api/UpdateCatagory';



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
        <Route path="/updateRole/:id" element={<UpdateRole />}></Route>
      </Routes>
      <Routes>
        <Route path="/updateUser/:id" element={<UpdateUser />}></Route>
      </Routes>
      <Routes>
        <Route path="/updateService/:id" element={<UpdateService />}></Route>
      </Routes>
      <Routes>
        <Route path="/updateCatagory/:id" element={<UpdateCatagory />}></Route>
      </Routes>
      <Routes>
        <Route path="/admin/Dashboard" element={<AdminDashboard />}></Route>
      </Routes>
      <Routes>
        <Route path="/GetRole" element={<GetRole />}></Route>
      </Routes>
      <Routes>
        <Route path="/GetUser" element={<GetUser />}></Route>
      </Routes>
      <Routes>
        <Route path="/GetService" element={<GetService />}></Route>
      </Routes>
      <Routes>
        <Route path="/GetCatagory" element={<GetCatagory />}></Route>
      </Routes>
      <Routes>
        <Route path="/addcatagory/:id" element={<GetCatagory />}></Route>
      </Routes>
      <Routes>
        <Route path="/addViceCatagory/:id" element={<GetViceCatagory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
