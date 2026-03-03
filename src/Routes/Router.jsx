import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Services from "../Pages/Services/Services";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";

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
        path: "/about",
        Component: About,
      },
      {
        path: "/skills",
        Component: Skills,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

export default router;
