import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";

import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import Error from "../pages/error/Error";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "menu",
        element: <Menu />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  }
]);
