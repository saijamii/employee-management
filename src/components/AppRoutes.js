import Dashboard from '../Pages/Dashboard/Dashboard';
import Department from '../Pages/Department/Department';
import Employee from '../Pages/Employee/Employee';
import Salary from '../Pages/Employee/Salary';
import LeaveType from '../Pages/Leaves/LeaveType';
import Request from '../Pages/Employee/Request';
import Report from '../Pages/Report/Report';


const AppRoutes = [
  { key: "1", exact: true, path: "/", component: Dashboard },
  { key: "2", exact: true, path: "/app/department", component: Department },
  { key: "3", exact: true, path: "/app/leaveType", component: LeaveType },
  { key: "4", exact: true, path: "/app/employee", component: Employee },
  { key: "5", exact: true, path: "/app/salary", component: Salary },
  { key: "6", exact: true, path: "/app/request", component: Request },
  { key: "7", exact: true, path: "/app/report", component: Report},
];

export default AppRoutes;
