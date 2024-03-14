import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Application from "./Application";
import Login from "./Pages/Login/Login";

export default function Authenticated() {
  console.log("Authenticated");
  const location = useLocation();

  return (
    <div
      style={{
        background: "#ffff",
        // marginBottom: "10vw",
      }}
    >
      {location.pathname !== "/login" &&
      location.pathname !== "*" &&
      location.pathname !== "/" &&
      location.pathname !== "" ? (
        <Application />
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}
