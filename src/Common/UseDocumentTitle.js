import { useEffect } from "react";
import AppRoutes from "../Config/AppRoutes";

const UseDocumentTitle = (path) => {
  useEffect(() => {
    document.title = AppRoutes?.find((e) => e?.path === path)?.title || "";
  }, [path]);
};

export { UseDocumentTitle };
