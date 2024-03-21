import React, { useEffect } from "react";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";

const Report = () => {
  useEffect(() => {
    UseDocumentTitle(window.location.pathname);
  }, []);
  return <h1>Report</h1>;
};

export default Report;
