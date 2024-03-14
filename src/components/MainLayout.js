import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme,Row,Col } from 'antd';
import Sidebar from '../components/Sidebar';
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sidebar />    
      <Layout>
        {/* <Header /> */}
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Row>
          <Col span={19} offset={4}>
        <Content
           style={{margin:'18px 10px'}}
        >
          <div
            style={{
             padding: 4,
              minHeight: "80vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Routes>
              {AppRoutes.map((route) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  element={<route.component />}
                  key={route.key}
                />
              ))}
            </Routes>
          </div>
        </Content>
        </Col>
        </Row>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;