// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App.jsx";
import RemitoPage from "../features/remito/pages/RemitoPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RemitoPage />,
    children: [
      {
        index: true,
        element: <App />, // Página de inicio
      },
      {
        path: "remito",
        element: <RemitoPage />, // Página principal de "Remito"
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
