import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Services from "../Pages/Services/Services";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Loading from "../Components/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
        loader: async () => {
          const res = await fetch("/projects.json")
          return res.json();
        },
          
        hydrateFallbackElement: <Loading />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
