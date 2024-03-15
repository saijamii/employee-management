import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authenticated from "./Common/Authenticated";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Authenticated />} />
      </Routes>
    </Router>
  );
}
