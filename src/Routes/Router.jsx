import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/",
        Component: HomePage,
      },
    ],
  },
]);

export default router;
