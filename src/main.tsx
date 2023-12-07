import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PATHS from "./lib/paths";
import { Toaster } from "@/components/ui/toaster";
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
);
