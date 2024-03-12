import React from "react";
import { Route, Routes, Link, useLocation} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import styles from '../StyleSheet/Sidebar.module.css'

const Layout = () => {
    const location = useLocation();
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className={`${styles.sidebar} col-auto col-md-2 px-1 px-sm-2 px-0 bg-dark`}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Employee Management</span>
              </Link>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className={`${styles.navItem} ${location.pathname === "/" ? styles.active : ""}`}>
                  <Link to="/" className="nav-link px-0 align-middle">
                    <i className="fs-5 bi bi-border-all" style={{color:'white'}}></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-white">
                      Dashboard
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/app/department" className="nav-link px-0 align-middle">
                    <i className="fs-5 bi-table" style={{color:'white'}}></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-white">
                      Department
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/app/leaveType" className="nav-link px-0 align-middle">
                    <i className="fs-5 bi-bootstrap" style={{color:'white'}}></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-white">
                      Leave Type
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/app/employee" className="nav-link px-0 align-middle">
                    <i className="fs-5 bi bi-people-fill" style={{color:'white'}}></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-white">
                      Employee
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/app/salary" className="nav-link px-0 align-middle">
                    <i className="fs-5 bi bi-currency-rupee" style={{color:'white'}}></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-white">
                      Salary
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/app/request" className="nav-link px-0 align-middle">
                    <i className="fs-5 bi-people" style={{color:'white'}}></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-white">
                      Leave Request
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/app/report" className="nav-link px-0 align-middle">
                    <i className="fs-5 bi-people" style={{color:'white'}}></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-white">
                      Report
                    </span>{" "}
                  </Link>
                </li>
              </ul>
              <div className="dropdown pb-5">
                <Link
                  to="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">Avatar</span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <Link className="dropdown-item" to="/app/settings">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/app/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/app/logout">
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
              <hr />
              
            </div>
          </div>
          <div className="col-md-10 offset-md-2 py-3" style={{ marginLeft: "25vw" }}>
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
