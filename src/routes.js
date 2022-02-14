import { useRoutes } from "react-router-dom";
import { About, Home } from "./pages";
import Layout from "./components/Layout";
import Contact from "./pages/contact";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
}
