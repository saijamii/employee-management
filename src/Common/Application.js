import React, { useState } from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Department from "../Pages/Department/Department";
import LeaveType from "../Pages/Leaves/LeaveType";
import Employee from "../Pages/Employee/Employee";
import Salary from "../Pages/Employee/Salary";
import Request from "../Pages/Employee/Request";
import Report from "../Pages/Report/Report";
import SiderMenu from "../SiderMenu";
import CommonHeader from "./CommonHeader";
import "../App.css"
const { Content, Header } = Layout;

function Application() {
  const [menuVisable, setMenuVisable] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const siderClosed = () => {
    setMenuVisable(false);
  };
  const siderOpened = () => {
    setMenuVisable(true);
  };
  const handleMenuItemClick = (menuItem) => {
    console.log("menu",menuItem)
    setActiveMenu(menuItem);
  };

  return (
    <Layout hasSider>
      <SiderMenu
        className="show-on-desktop"
        siderOpened={siderOpened}
        siderClosed={siderClosed}
        menuVisable={menuVisable}
        onMenuItemClick={handleMenuItemClick}
      />
      <Layout>
        <Header
          className="app-hed topheight"
          style={{ position: "fixed", width: "100%", zIndex: "1",backgroundColor:'white'}}
        >
          <CommonHeader
            activeMenu={activeMenu}
            siderOpened={siderOpened}
            siderClosed={siderClosed}
            menuVisable={menuVisable}
          />
        </Header>
        <Content className="mainlayout">
          <div className="app-div">
            <Layout style={{ minHeight: "90vh", overflowX: "hidden" }}>
              <Routes>
                <Route path="/app/dashboard" element={<Dashboard />} />
                <Route path="/app/department" element={<Department />} />
                <Route path="/app/leaveType" element={<LeaveType />} />
                <Route path="/app/employee" element={<Employee />} />
                <Route path="/app/salary" element={<Salary />} />
                <Route path="/app/request" element={<Request />} />
                <Route path="/app/report" element={<Report />} />
              </Routes>
            </Layout>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Application;
