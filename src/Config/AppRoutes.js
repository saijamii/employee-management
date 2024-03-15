import Dashboard from "../Pages/Dashboard/Dashboard";
import Department from "../Pages/Department/Department";
import Employee from "../Pages/Employee/Employee";
import Salary from "../Pages/Employee/Salary";
import LeaveType from "../Pages/Leaves/LeaveType";
import Request from "../Pages/Employee/Request";
import Report from "../Pages/Report/Report";
import Login from "../Pages/Login/Login";

const AppRoutes = [
  // { key: "0", exact: true, path: "/", component: Login },
  { key: "1", exact: true, path: "/login", component: Login },
  {
    key: "2",
    exact: true,
    path: "/app/dashboard",
    component: Dashboard,
    title: "Dashboard",
  },
  {
    key: "3",
    exact: true,
    path: "/app/department",
    component: Department,
    title: "Department",
  },
  {
    key: "4",
    exact: true,
    path: "/app/leaveType",
    component: LeaveType,
    title: "LeaveType",
  },
  {
    key: "5",
    exact: true,
    path: "/app/employee",
    component: Employee,
    title: "Employee",
  },
  {
    key: "6",
    exact: true,
    path: "/app/salary",
    component: Salary,
    title: "Salary",
  },
  {
    key: "7",
    exact: true,
    path: "/app/request",
    component: Request,
    title: "Request",
  },
  {
    key: "8",
    exact: true,
    path: "/app/report",
    component: Report,
    title: "Report",
  },
];

export default AppRoutes;
