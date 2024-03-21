import AppRoutes from "../Config/AppRoutes";

const UseDocumentTitle = (path) => {
  document.title = AppRoutes?.find((e) => e?.path === path)?.title || "rrr";
};

export { UseDocumentTitle };
