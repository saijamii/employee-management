import React from "react";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";

const Report = () => {
  UseDocumentTitle(window.location.pathname);
  return <h1>Report</h1>;
};

export default Report;
