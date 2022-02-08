import Navbar from "./nav";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
