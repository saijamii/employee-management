import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Department from "./Pages/Department/Department";
import LeaveType from "./Pages/Leaves/LeaveType";
import Employee from "./Pages/Employee/Employee";
import Salary from "./Pages/Employee/Salary";
import Request from "./Pages/Employee/Request";
import Report from "./Pages/Report/Report";
import Login from "./Pages/Login/Login.js";

function App() {
  const appVersion = "v13.03.24.02";
  console.log(appVersion, "appVersion");
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/department" element={<Department />} />
          <Route path="/app/leaveType" element={<LeaveType />} />
          <Route path="/app/employee" element={<Employee />} />
          <Route path="/app/salary" element={<Salary />} />
          <Route path="/app/request" element={<Request />} />
          <Route path="/app/report" element={<Report />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
