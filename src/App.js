import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./view/Dashboard";
import Login from "./view/Login";
import Navbar from "./view/Navbar";
import Register from "./view/Register";
import UserDetail from "./view/User_Detail";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}>
        </Route>
        <Route path="/register" element={<Register/>}>
        </Route>
        <Route path="/dashboard" element={<><Navbar/><Dashboard/></>}>
          {/* <Navbar/> */}
          
        </Route>
        <Route path="/users/:id" element={<UserDetail/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;