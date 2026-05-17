import React, { lazy, Suspense } from "react";
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
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Avinash" }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
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
        element: <RestaurantPage />,
      },
      {
        path: "/location/:locationId",
        element: <Location />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h3>loading...</h3>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
