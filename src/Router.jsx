import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <div className="grid h-screen place-content-center bg-white px-4">
        <h1 className="uppercase tracking-widest text-gray-500">
          404 | Not Found
        </h1>
      </div>
    ),
  },
]);

export default Router;
