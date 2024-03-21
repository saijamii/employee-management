import React, { useContext, useState } from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import SiderMenu from "../SiderMenu";
import AppRoutes from "../Config/AppRoutes";
import { AppContext } from "../Config/AppContext";
import CommonHeader from "./CommonHeader";
import "../App.css";
const { Content, Header } = Layout;

function Application() {
  const context = useContext(AppContext);
  console.log(context, "context");
  const [menuVisable, setMenuVisable] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const siderClosed = () => {
    setMenuVisable(false);
  };
  const siderOpened = () => {
    setMenuVisable(true);
  };
  const handleMenuItemClick = (menuItem) => {
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
          style={{
            position: "fixed",
            width: "100%",
            zIndex: "1",
            backgroundColor: "white",
          }}
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
            <Layout
              style={{
                minHeight: "90vh",
                overflowX: "hidden",
                marginTop: "10vh",
              }}
            >
              <Routes>
                {AppRoutes?.map(
                  (item) =>
                    item.title && (
                      <Route
                        path={item.path}
                        key={item.key}
                        element={<item.component />}
                      />
                    )
                )}
              </Routes>
            </Layout>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Application;
