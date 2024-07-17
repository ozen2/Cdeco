import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../../client/index.css";
import fetchApi from "./services/fetchApi";

import App from "./App";
import AdminAddProduct from "./pages/AdminAddProduct";
import Home from "./pages/Home";

const productsUrl = "/api/products";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AdminAddProduct />,
        loader: () => fetchApi(productsUrl),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
