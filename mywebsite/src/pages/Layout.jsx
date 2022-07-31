import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
// import "../styles/css/index.css";

const Layout = () => {
  return (
    <>
      <Navbar2 />
      <br></br>
      <br></br>
      <br></br>
      <Outlet />
    </>
  );
};

export default Layout;
