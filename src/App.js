import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login.js";
import Department from "./Pages/Department/Department";
import LeaveType from "./Pages/Leaves/LeaveType";
import Employee from "./Pages/Employee/Employee";
import Salary from "./Pages/Employee/Salary";
import Request from "./Pages/Employee/Request";
import Report from "./Pages/Report/Report";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login, sets isLoggedIn to true
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout, sets isLoggedIn to false
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn && <Route path="/" element={<Login onLogin={handleLogin} />} />}
        {isLoggedIn && (
          <Route
            path="/"
            element={<MainLayout />}
          >
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="/app/department" element={<Department />} />
          <Route path="/app/leaveType" element={<LeaveType />} />
          <Route path="/app/employee" element={<Employee />} />
          <Route path="/app/salary" element={<Salary />} />
          <Route path="/app/request" element={<Request />} />
          <Route path="/app/report" element={<Report />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;

