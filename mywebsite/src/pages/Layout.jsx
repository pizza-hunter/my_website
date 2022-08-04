import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import "../styles/css/index.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/*TODO: Create <Footer /> */}
    </>
  );
};

export default Layout;
