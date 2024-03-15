import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function CommonHeader() {
  return (
    <>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ position: "fixed", width: "auto" }}
      >
        <Menu.Item key="1">
          <Link to="/">
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </>
  );
}
