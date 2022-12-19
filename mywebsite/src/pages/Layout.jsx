import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LinkBar from "../components/LinkBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <LinkBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
