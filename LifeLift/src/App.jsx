import { Route, Routes } from "react-router-dom";


import "./App.css";
import { Navbar } from "./components/nav/Navbar";
import { Doctor, Patient, Home,  S } from "./components/pages";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardMain from "./components/DashboardMain/DashboardMain";




function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element = {< Sidebar/>}/>
        <Route  path="/" element = {< DashboardMain/>}/>
      </Routes>
      {/* <Sidebar/> */}
      <DashboardMain/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/doctor" element={<Doctor />} /> */}
        <Route path="/s" element={<S/>} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
 








    </div>






  );
}

export default App;