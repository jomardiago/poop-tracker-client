import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PATHS from "./lib/paths";
import HomePage from "./pages/home/home-page";
import RegisterPage from "./pages/register/register-page";
import LoginPage from "./pages/login/login-page";

import "./index.css";

const router = createBrowserRouter([
  {
    path: PATHS.root,
    element: <HomePage />,
  },
  {
    path: PATHS.register,
    element: <RegisterPage />,
  },
  {
    path: PATHS.login,
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
