import React, { useState } from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Department from "./Pages/Department/Department";
import LeaveType from "./Pages/Leaves/LeaveType";
import Employee from "./Pages/Employee/Employee";
import Salary from "./Pages/Employee/Salary";
import Request from "./Pages/Employee/Request";
import Report from "./Pages/Report/Report";
import SiderMenu from "./SiderMenu";
import CommonHeader from "./CommonHeader";
const { Content, Header } = Layout;

function Application() {
  const [menuVisable, setMenuVisable] = useState(false);

  const siderClosed = () => {
    setMenuVisable(false);
  };
  const siderOpened = () => {
    setMenuVisable(true);
  };

  return (
    <Layout hasSider className="fullsitelayout">
      <SiderMenu
        className="show-on-desktop"
        siderOpened={siderOpened}
        siderClosed={siderClosed}
        menuVisable={menuVisable}
      />
      <Layout className="sitecontentlayout">
        <Header className="app-hed topheight">
          <CommonHeader
            siderOpened={siderOpened}
            siderClosed={siderClosed}
            menuVisable={menuVisable}
          />
        </Header>
        <Content className="mainlayout">
          <div className="app-div">
            <Layout>
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
