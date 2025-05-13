import Navbar from "@/my-components/Navbar";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
};

export default Layout;