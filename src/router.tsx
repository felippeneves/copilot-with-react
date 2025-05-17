import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import Employees from "./pages/Employees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
