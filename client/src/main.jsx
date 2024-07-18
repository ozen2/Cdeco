import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../../client/index.css";
import fetchApi from "./services/fetchApi";

import App from "./App";
import AdminAddProduct from "./pages/AdminAddProduct";
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import ProductPage from "./pages/ProductPage";
import AdminProductsList from "./pages/AdminProductsList";
import AdminProduct from "./pages/AdminProduct";
import AdminProductEdit from "./pages/AdminProductEdit";

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
      },
      {
        path: "/productsList",
        element: <ProductsList />,
        loader: () => fetchApi(productsUrl),
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
        loader: ({ params }) => fetchApi(`${productsUrl}/${params.id}`),
      },
      {
        path: "/admin/productsList",
        element: <AdminProductsList />,
        loader: () => fetchApi(productsUrl),
      },
      {
        path: "/admin/product/:id",
        element: <AdminProduct />,
        loader: ({ params }) => fetchApi(`${productsUrl}/${params.id}`),
      },
      {
        path: "/admin/product/edit/:id",
        element: <AdminProductEdit />,
        loader: ({ params }) => fetchApi(`${productsUrl}/${params.id}`),
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
