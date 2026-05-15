import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Restaurants from "./components/Restaurants";
import Order from "./components/Order";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";
import Location from "./components/Location";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantPage />
      },
      {
        path: "/location/:locationId",
        element: <Location />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
