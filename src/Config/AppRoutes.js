import Dashboard from "../Pages/Dashboard/Dashboard";
import Department from "../Pages/Department/Department";
import Employee from "../Pages/Employee/Employee";
import Salary from "../Pages/Employee/Salary";
import LeaveType from "../Pages/Leaves/LeaveType";
import Request from "../Pages/Employee/Request";
import Report from "../Pages/Report/Report";
import Login from "../Pages/Login/Login";
import {
  AppstoreFilled,
  DollarOutlined,
  MedicineBoxFilled,
} from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { BiSolidReport, BiMeh } from "react-icons/bi";
import AddEmployee from "../Pages/Employee/AddEmployee";

const AppRoutes = [
  { key: "1", exact: true, path: "/login", component: Login },
  {
    key: "2",
    exact: true,
    path: "/app/dashboard",
    component: Dashboard,
    title: "Dashboard",
    icon: <AppstoreFilled />,
    isShowItem: true,
  },
  {
    key: "3",
    exact: true,
    path: "/app/department",
    component: Department,
    title: "Department",
    icon: <FcDepartment />,
    isShowItem: true,
  },
  {
    key: "4",
    exact: true,
    path: "/app/leaveType",
    component: LeaveType,
    title: "LeaveType",
    icon: <MedicineBoxFilled />,
    isShowItem: true,
  },
  {
    key: "5",
    exact: true,
    path: "/app/employee",
    component: Employee,
    title: "Employee",
    icon: <FaUser />,
    isShowItem: true,
  },
  {
    key: "6",
    exact: true,
    path: "/app/salary",
    component: Salary,
    title: "Salary",
    icon: <DollarOutlined />,
    isShowItem: true,
  },
  {
    key: "7",
    exact: true,
    path: "/app/request",
    component: Request,
    title: "Request",
    icon: <BiMeh />,
    isShowItem: true,
  },
  {
    key: "8",
    exact: true,
    path: "/app/report",
    component: Report,
    title: "Report",
    icon: <BiSolidReport />,
    isShowItem: true,
  },
  {
    key: "9",
    exact: true,
    path: "/app/addEmployee",
    component: AddEmployee,
    title: "Add New Employee",
    isShowItem: false,
  },
];

export default AppRoutes;
