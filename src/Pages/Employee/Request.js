import React from "react";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";

const Request = () => {
  UseDocumentTitle(window.location.pathname);

  return <h1>Request</h1>;
};

export default Request;
