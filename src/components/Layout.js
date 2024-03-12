<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> f766427 (leaves component)
import { Route, Routes, Link} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import styles from '../StyleSheet/Sidebar.module.css'
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
<<<<<<< HEAD
  const [menuItem, setMenuItem] = useState('Dashboard');
  const itemClickHandler = (itemName) => {
    console.log(itemName)
    setMenuItem(itemName)
  }
=======
    // const location = useLocation();
>>>>>>> f766427 (leaves component)
  return (
    <>
      <div className="container-fluid" style={{backgroundColor:'#f0f2f5',minHeight:'100vh'}}>
        <Header menuItem={menuItem}/>
        <div className="row flex-nowrap">
          <div className={`${styles.sidebar} col-auto col-md-2 px-1 px-sm-2 px-0 bg-dark`}>
           <Sidebar itemClickHandler={itemClickHandler}/>
          </div>                   
          <div className="col-md-10 offset-md-2 py-5">            
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
        </div>
      </div>
    </>
  );
};

export default Layout;
