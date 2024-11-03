import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default Router;
