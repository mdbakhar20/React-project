import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import About  from "./src/Component/about";
import Contact  from "./src/Component/contact";
import Cart  from "./src/Component/cart";
import Error from "./src/Component/error";
import Body from "./src/Component/Body";

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
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />)