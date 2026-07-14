import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import About  from "./src/Component/about";
import Contact  from "./src/Component/contact";
import Cart  from "./src/Component/cart";
import Error from "./src/Component/error";
import Body from "./src/Component/Body";
import Auth from "./src/Component/Auth";
import SignIn from "./src/Component/signIn";
import SignUp from "./src/Component/SignUp";
import RestaurantPage from "./src/Component/RestaurantPage";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
         children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />
      },
      {
        path: "/Auth",
        element:<Auth/>,
        children: [
         { 
          path: "/Auth/signIn",
          element: <SignIn/>
        },
        {
          path: "/Auth/signUp",
          element: <SignUp/>
        }
        ]
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />)