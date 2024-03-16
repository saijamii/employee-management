import React, { useEffect } from "react";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";

export default function AddEmployee() {
  useEffect(() => {
    UseDocumentTitle(window.location.pathname);
  }, []);
  return <div>AddEmployee</div>;
}
