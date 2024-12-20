// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
