import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import AppRoutes from "./Config/AppRoutes";
const { Sider } = Layout;
function SiderMenu() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="lg"
      // collapsedWidth="0"
    >
      <div className="demo-logo-vertical" />
      <Menu
        style={{
          marginTop: "60px",
          position: "fixed",
          width: collapsed ? "auto" : "200px",
        }}
        theme="dark"
        defaultSelectedKeys={["1"]}
      >
        {AppRoutes?.map(
          (item) =>
            item.title && (
              <Menu.Item key={item.key} icon={item.icon}>
                <span>{item.title}</span>
                <Link to={item.path} />
              </Menu.Item>
            )
        )}
      </Menu>
    </Sider>
  );
}

export default SiderMenu;
