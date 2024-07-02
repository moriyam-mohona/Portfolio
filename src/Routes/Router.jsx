import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Navbar from "../Pages/Navbar/Navbar";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
