import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../StyleSheet/Sidebar.module.css";

const Sidebar = ({ itemClickHandler }) => {
  const [active, setActive] = useState(0);
  const appVersion = "v13.03.24.02";

  return (
    <div className={`${styles.sidebar} bg-dark`}>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link
          to="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline">Employee Management</span>
        </Link>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li>
            <Link
              to="/"
              className="nav-link px-0 align-middle"
              onClick={() => {
                setActive(0);
                itemClickHandler("Dashboard");
              }}
              style={{
                backgroundColor: active === 0 ? "#429def" : "",
                width: "10vw",
              }}
            >
              <i
                className="fs-6 bi-speedometer2 px-sm-2"
                style={{ color: "white" }}
              ></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-white">
                Dashboard
              </span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/app/department"
              className="nav-link px-0 align-middle"
              onClick={() => {
                setActive(1);
                itemClickHandler("Department");
              }}
              style={{
                backgroundColor: active === 1 ? "#429def" : "",
                width: "10vw",
              }}
            >
              <i
                className="fs-6 bi-building px-sm-2"
                style={{ color: "white" }}
              ></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-white">
                Department
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/app/leaveType"
              className="nav-link px-0 align-middle"
              onClick={() => {
                setActive(2);
                itemClickHandler("Leave Type");
              }}
              style={{
                backgroundColor: active === 2 ? "#429def" : "",
                width: "10vw",
              }}
            >
              <i
                className="fs-6 bi-lungs px-sm-2"
                style={{ color: "white" }}
              ></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-white">
                Leave Type
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/app/employee"
              className="nav-link px-0 align-middle"
              onClick={() => {
                setActive(3);
                itemClickHandler("Employee");
              }}
              style={{
                backgroundColor: active === 3 ? "#429def" : "",
                width: "10vw",
              }}
            >
              <i
                className="fs-6 bi bi-people-fill px-sm-2"
                style={{ color: "white" }}
              ></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-white">
                Employee
              </span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/app/salary"
              className="nav-link px-0 align-middle"
              onClick={() => {
                setActive(4);
                itemClickHandler("Salary");
              }}
              style={{
                backgroundColor: active === 4 ? "#429def" : "",
                width: "10vw",
              }}
            >
              <i
                className="fs-6 bi bi-currency-rupee px-sm-2"
                style={{ color: "white" }}
              ></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-white">Salary</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/app/request"
              className="nav-link px-0 align-middle"
              onClick={() => {
                setActive(5);
                itemClickHandler("Leave Request");
              }}
              style={{
                backgroundColor: active === 5 ? "#429def" : "",
                width: "10vw",
              }}
            >
              <i
                className="fs-6 bi-calendar-check px-sm-2"
                style={{ color: "white" }}
              ></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-white">
                Leave Request
              </span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/app/report"
              className="nav-link px-0 align-middle"
              onClick={() => {
                setActive(6);
                itemClickHandler("Report");
              }}
              style={{
                backgroundColor: active === 6 ? "#429def" : "",
                width: "10vw",
              }}
            >
              <i
                className="fs-6 bi-file-earmark-bar-graph px-sm-2"
                style={{ color: "white" }}
              ></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-white">Report</span>{" "}
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
            <li>
              <div className="dropdown-item">{appVersion}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
